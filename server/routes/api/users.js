const router = require('express').Router();
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const { checkValidationResult } = require('../../middleware/validation')
const { body } = require('express-validator');

// 1. GET /user/ - دریافت همه کاربران (فقط ادمین)
router.get('/', auth, async (req, res) => {
    try {
        // const page = parseInt(req.query.page) || 1;
        // const limit = parseInt(req.query.limit) || 10;
        // const skip = (page - 1) * limit;

        const users = await User.find({})
        //   .select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes')
        //   .skip(skip)
        //   .limit(limit)
        //   .sort({ createdAt: -1 });

        // const total = await User.countDocuments();


        res.json({
            success: true,
            data: {
                users,
                // pagination: {
                //   page,
                //   limit,
                //   total,
                //   pages: Math.ceil(total / limit)
                // }
            }
        });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت کاربران'
        });
    }
});

// 2. GET /user/id - دریافت یک کاربر
router.get('/id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
            .select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        // بررسی دسترسی: کاربر فقط می‌تواند اطلاعات خودش را ببیند یا ادمین
        if (req.user.id !== req.body.id && !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'دسترسی غیر مجاز'
            });
        }

        res.json({
            success: true,
            data: { user }
        });
    } catch (error) {
        console.error('Get user error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'شناسه کاربر معتبر نیست'
            });
        }
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت کاربر'
        });
    }
});

// 3. PUT /user/edit-profile - تغییر پروفایل
router.put('/edit-profile',
    auth,
    [
        body('name')
            .optional()
            .trim()
            .isLength({ min: 2, max: 50 })
            .withMessage('نام باید بین ۲ تا ۵۰ کاراکتر باشد'),
        body('email')
            .optional()
            .isEmail()
            .withMessage('ایمیل معتبر نیست')
            .normalizeEmail(),
        body('gender')
            .optional()
            .isIn(['male', 'female', 'other'])
            .withMessage('جنسیت معتبر نیست'),
        body('phone')
            .optional()
            .matches(/^[\d\s-()+]{10,}$/)
            .withMessage('شماره تلفن معتبر نیست'),
        body('skills')
            .optional()
            .isArray()
            .withMessage('مهارت‌ها باید به صورت آرایه باشند')
    ],
    checkValidationResult,
    async (req, res) => {
        try {
            // بررسی دسترسی
            if (req.user.id !== req.body.id && !req.user.isAdmin) {
                return res.status(403).json({
                    success: false,
                    message: 'شما فقط می‌توانید پروفایل خود را ویرایش کنید'
                });
            }

            const user = await User.findById(req.body.id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'کاربر یافت نشد'
                });
            }

            // بررسی یکتایی ایمیل اگر تغییر کرده
            if (req.body.email && req.body.email !== user.email) {
                const existingUser = await User.findOne({ email: req.body.email });
                if (existingUser) {
                    return res.status(409).json({
                        success: false,
                        message: 'این ایمیل قبلاً ثبت شده است'
                    });
                }
            }

            // فیلدهای قابل بروزرسانی
            const allowedUpdates = ['name', 'email', 'gender', 'birthday', 'location', 'phone', 'skills'];
            const updates = {};

            allowedUpdates.forEach(field => {
                if (req.body[field] !== undefined) {
                    updates[field] = req.body[field];
                }
            });

            const updatedUser = await User.findByIdAndUpdate(
                req.body.id,
                updates,
                { new: true, runValidators: true }
            ).select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes');

            res.json({
                success: true,
                message: 'پروفایل با موفقیت بروزرسانی شد',
                data: { user: updatedUser }
            });
        } catch (error) {
            console.error('Edit profile error:', error);
            res.status(500).json({
                success: false,
                message: 'خطا در بروزرسانی پروفایل'
            });
        }
    }
);

// 4. POST /user/change-password - تغییر رمز عبور
router.post('/change-password',
    auth,
    [
        body('currentPassword')
            .notEmpty()
            .withMessage('رمز عبور فعلی الزامی است'),
        body('newPassword')
            .isLength({ min: 8 })
            .withMessage('رمز عبور جدید باید حداقل 8 کاراکتر باشد')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
            .withMessage('رمز عبور باید شامل حروف بزرگ، کوچک و اعداد باشد')
    ],
    checkValidationResult,
    async (req, res) => {
        try {
            // بررسی دسترسی
            if (req.user.id !== req.body.id && !req.user.isAdmin) {
                return res.status(403).json({
                    success: false,
                    message: 'شما فقط می‌توانید رمز عبور خود را تغییر دهید'
                });
            }

            const user = await User.findById(req.body.id).select('+password');
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'کاربر یافت نشد'
                });
            }

            // بررسی رمز عبور فعلی
            const isCurrentPasswordValid = await user.comparePassword(req.body.currentPassword);
            if (!isCurrentPasswordValid) {
                return res.status(400).json({
                    success: false,
                    message: 'رمز عبور فعلی نادرست است'
                });
            }

            // بررسی عدم تکرار رمز عبور قبلی
            const isSameAsOld = await user.comparePassword(req.body.newPassword);
            if (isSameAsOld) {
                return res.status(400).json({
                    success: false,
                    message: 'رمز عبور جدید نباید با رمز عبور فعلی یکسان باشد'
                });
            }

            // بروزرسانی رمز عبور
            user.password = req.body.newPassword;
            await user.save();

            res.json({
                success: true,
                message: 'رمز عبور با موفقیت تغییر کرد'
            });
        } catch (error) {
            console.error('Change password error:', error);
            res.status(500).json({
                success: false,
                message: 'خطا در تغییر رمز عبور'
            });
        }
    }
);

//? 5. POST /user/forgot-password - ارسال کد به ایمیل
router.post('/forgot-password',
    [
        body('email')
            .isEmail()
            .withMessage('ایمیل معتبر نیست')
            .normalizeEmail()
    ],
    checkValidationResult,
    async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                // برای امنیت بیشتر، حتی اگر کاربر وجود نداشت هم پیام موفقیت بده
                return res.json({
                    success: true,
                    message: 'اگر ایمیل در سیستم وجود داشته باشد، کد بازیابی ارسال شد'
                });
            }

            // تولید کد ۶ رقمی
            const resetCode = crypto.randomInt(100000, 999999).toString();
            const resetCodeExpires = Date.now() + 10 * 60 * 1000; // 10 دقیقه

            // ذخیره کد در کاربر
            user.resetPasswordCode = resetCode;
            user.resetPasswordExpires = resetCodeExpires;
            await user.save();

            // در اینجا باید ایمیل ارسال شود
            // await sendResetCodeEmail(user.email, resetCode);

            console.log(`Reset code for ${user.email}: ${resetCode}`); // برای تست

            res.json({
                success: true,
                message: 'کد بازیابی رمز عبور ارسال شد',
                data: {
                    expiresIn: '10 دقیقه',
                    // فقط در حالت توسعه کد برگردانده شود
                    ...(process.env.NODE_ENV === 'development' && { code: resetCode })
                }
            });
        } catch (error) {
            console.error('Forgot password error:', error);
            res.status(500).json({
                success: false,
                message: 'خطا در ارسال کد بازیابی'
            });
        }
    }
);

//? 6. POST /user/verify-key - احراز دو مرحله‌ای با کلید
router.post('/verify-key',
    [
        body('email')
            .isEmail()
            .withMessage('ایمیل معتبر نیست')
            .normalizeEmail(),
        body('code')
            .isLength({ min: 6, max: 6 })
            .withMessage('کد باید ۶ رقمی باشد')
            .isNumeric()
            .withMessage('کد باید عددی باشد')
    ],
    checkValidationResult,
    async (req, res) => {
        try {
            const { email, code } = req.body;

            const user = await User.findOne({
                email,
                'twoFactorAuth.enabled': true,
                'twoFactorAuth.method': 'key'
            });

            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'کاربر یافت نشد یا احراز دو مرحله‌ای فعال نیست'
                });
            }

            // در اینجا باید کد با authenticator app بررسی شود
            // این یک پیاده‌سازی ساده است
            const isValid = await verifyAuthenticatorCode(user.twoFactorAuth.secretKey, code);

            if (!isValid) {
                return res.status(400).json({
                    success: false,
                    message: 'کد احراز نامعتبر است'
                });
            }

            // بروزرسانی زمان آخرین استفاده
            user.twoFactorAuth.lastUsed = new Date();
            await user.save();

            // تولید توکن
            const token = generateToken(user._id);

            res.json({
                success: true,
                message: 'احراز هویت موفقیت‌آمیز بود',
                data: {
                    user: {
                        id: user._id,
                        email: user.email,
                        name: user.name
                    },
                    token
                }
            });
        } catch (error) {
            console.error('Verify key error:', error);
            res.status(500).json({
                success: false,
                message: 'خطا در احراز هویت'
            });
        }
    }
);

//? 7. POST /user/verify-email - احراز دو مرحله‌ای با ایمیل
router.post('/verify-email',
    [
        body('email')
            .isEmail()
            .withMessage('ایمیل معتبر نیست')
            .normalizeEmail(),
        body('code')
            .isLength({ min: 6, max: 6 })
            .withMessage('کد باید ۶ رقمی باشد')
            .isNumeric()
            .withMessage('کد باید عددی باشد')
    ],
    checkValidationResult,
    async (req, res) => {
        try {
            const { email, code } = req.body;

            const user = await User.findOne({
                email,
                'twoFactorAuth.enabled': true,
                'twoFactorAuth.method': 'email'
            });

            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'کاربر یافت نشد یا احراز دو مرحله‌ای با ایمیل فعال نیست'
                });
            }

            // بررسی کد (این بخش باید با سیستم ارسال ایمیل یکپارچه شود)
            // در اینجا کد را مستقیماً قبول می‌کنیم برای تست
            const isValid = true; // این باید با کد ارسال شده به ایمیل مقایسه شود

            if (!isValid) {
                return res.status(400).json({
                    success: false,
                    message: 'کد احراز نامعتبر است'
                });
            }

            // بروزرسانی زمان آخرین استفاده
            user.twoFactorAuth.lastUsed = new Date();
            await user.save();

            // تولید توکن
            const token = generateToken(user._id);

            res.json({
                success: true,
                message: 'احراز هویت موفقیت‌آمیز بود',
                data: {
                    user: {
                        id: user._id,
                        email: user.email,
                        name: user.name
                    },
                    token
                }
            });
        } catch (error) {
            console.error('Verify email error:', error);
            res.status(500).json({
                success: false,
                message: 'خطا در احراز هویت'
            });
        }
    }
);

// 8. DELETE /user/delete/id - حذف کاربر
router.delete('/delete/id', auth, async (req, res) => {
    try {
        // کاربر فقط می‌تواند خودش را حذف کند یا ادمین
        if (req.user.id !== req.body.id && !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'شما فقط می‌توانید حساب خود را حذف کنید'
            });
        }

        const user = await User.findById(req.body.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        await User.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: req.user.id === req.body.id ?
                'حساب کاربری شما با موفقیت حذف شد' :
                'کاربر با موفقیت حذف شد'
        });
    } catch (error) {
        console.error('Delete user error:', error);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'شناسه کاربر معتبر نیست'
            });
        }
        res.status(500).json({
            success: false,
            message: 'خطا در حذف کاربر'
        });
    }
});

// 9. PUT /user/change2fa - فعال و غیرفعال کردن احراز دو مرحله‌ای
router.put('/change2fa',
  auth,
  [
    body('enabled')
      .isBoolean()
      .withMessage('فعال بودن باید true یا false باشد'),
    body('method')
      .optional()
      .isIn(['email', 'sms', 'key'])
      .withMessage('روش باید یکی از مقادیر email, sms, key باشد'),
    body('code')
      .optional()
      .isLength({ min: 6, max: 6 })
      .withMessage('کد باید ۶ رقمی باشد')
  ],
  checkValidationResult,
  async (req, res) => {
    try {
      const { enabled, method, code } = req.body;
      const userId = req.user.id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'کاربر یافت نشد'
        });
      }

      // اگر می‌خواهد فعال کند
      if (enabled) {
        // بررسی روش انتخابی
        if (!method) {
          return res.status(400).json({
            success: false,
            message: 'در صورت فعال‌سازی، روش احراز باید مشخص شود'
          });
        }

        // اگر روش SMS است، باید شماره تلفن داشته باشد
        if (method === 'sms' && !user.phone) {
          return res.status(400).json({
            success: false,
            message: 'برای فعال‌سازی احراز با SMS، شماره تلفن باید ثبت شده باشد'
          });
        }

        // اگر روش key است، نیاز به کد تأیید دارد
        if (method === 'key') {
          if (!code) {
            return res.status(400).json({
              success: false,
              message: 'برای فعال‌سازی احراز با کلید، کد تأیید الزامی است'
            });
          }

          // در اینجا باید کد authenticator بررسی شود
          const isValid = await verifyAuthenticatorCode(user.twoFactorAuth.secretKey, code);

          if (!isValid) {
            return res.status(400).json({
              success: false,
              message: 'کد احراز نامعتبر است'
            });
          }
        }

        // اگر برای اولین بار فعال می‌شود، کدهای پشتیبان ایجاد کن
        let backupCodes = [];
        if (!user.twoFactorAuth.enabled) {
          backupCodes = Array.from({ length: 8 }, () => 
            crypto.randomInt(100000, 999999).toString()
          );
        }

        // بروزرسانی کاربر
        user.twoFactorAuth = {
          enabled: true,
          method: method,
          secretKey: method === 'key' ? 
            (user.twoFactorAuth.secretKey || generateSecretKey()) : 
            undefined,
          backupCodes: method === 'key' ? 
            (user.twoFactorAuth.backupCodes || backupCodes) : 
            [],
          lastUsed: user.twoFactorAuth.lastUsed
        };

        await user.save();

        res.json({
          success: true,
          message: `احراز دو مرحله‌ای با روش ${method} فعال شد`,
          data: {
            backupCodes: backupCodes.length > 0 ? backupCodes : undefined,
            method: method
          }
        });

      } else {
        // غیرفعال کردن
        user.twoFactorAuth = {
          enabled: false,
          method: user.twoFactorAuth.method,
          secretKey: undefined,
          backupCodes: [],
          lastUsed: user.twoFactorAuth.lastUsed
        };

        await user.save();

        res.json({
          success: true,
          message: 'احراز دو مرحله‌ای غیرفعال شد'
        });
      }

    } catch (error) {
      console.error('Change 2FA error:', error);
      res.status(500).json({
        success: false,
        message: 'خطا در تغییر وضعیت احراز دو مرحله‌ای'
      });
    }
  }
);

// 10. PUT /user/changenotif - تغییرات تنظیمات نوتیفیکیشن
router.put('/changenotif',
  auth,
  [
    body('mentions')
      .optional()
      .isObject()
      .withMessage('تنظیمات mentions باید آبجکت باشد'),
    body('comments')
      .optional()
      .isObject()
      .withMessage('تنظیمات comments باید آبجکت باشد'),
    body('follows')
      .optional()
      .isObject()
      .withMessage('تنظیمات follows باید آبجکت باشد'),
    body('logins')
      .optional()
      .isObject()
      .withMessage('تنظیمات logins باید آبجکت باشد'),
    body('global')
      .optional()
      .isObject()
      .withMessage('تنظیمات global باید آبجکت باشد'),
    body('quietHours')
      .optional()
      .isObject()
      .withMessage('تنظیمات quietHours باید آبجکت باشد'),
    body('language')
      .optional()
      .isIn(['fa', 'en', 'ar', 'tr'])
      .withMessage('زبان باید یکی از مقادیر fa, en, ar, tr باشد')
  ],
  checkValidationResult,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const {
        mentions,
        comments,
        follows,
        logins,
        global,
        quietHours,
        language
      } = req.body;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'کاربر یافت نشد'
        });
      }

      // بروزرسانی تنظیمات نوتیفیکیشن
      if (mentions) {
        user.notificationSettings.mentions = {
          ...user.notificationSettings.mentions,
          ...mentions
        };
      }

      if (comments) {
        user.notificationSettings.comments = {
          ...user.notificationSettings.comments,
          ...comments
        };
      }

      if (follows) {
        user.notificationSettings.follows = {
          ...user.notificationSettings.follows,
          ...follows
        };
      }

      if (logins) {
        user.notificationSettings.logins = {
          ...user.notificationSettings.logins,
          ...logins
        };
      }

      if (global) {
        user.notificationSettings.global = {
          ...user.notificationSettings.global,
          ...global
        };
      }

      // بروزرسانی ترجیحات
      if (quietHours) {
        user.notificationPreferences.quietHours = {
          ...user.notificationPreferences.quietHours,
          ...quietHours
        };

        // اعتبارسنجی ساعت‌ها
        if (quietHours.start && !isValidTime(quietHours.start)) {
          return res.status(400).json({
            success: false,
            message: 'فرمت ساعت شروع معتبر نیست (HH:mm)'
          });
        }

        if (quietHours.end && !isValidTime(quietHours.end)) {
          return res.status(400).json({
            success: false,
            message: 'فرمت ساعت پایان معتبر نیست (HH:mm)'
          });
        }
      }

      if (language) {
        user.notificationPreferences.language = language;
      }

      await user.save();

      // دریافت کاربر بروزرسانی شده بدون فیلدهای حساس
      const updatedUser = await User.findById(userId)
        .select('-password -twoFactorAuth.secretKey -twoFactorAuth.backupCodes');

      res.json({
        success: true,
        message: 'تنظیمات نوتیفیکیشن با موفقیت بروزرسانی شد',
        data: {
          notificationSettings: updatedUser.notificationSettings,
          notificationPreferences: updatedUser.notificationPreferences
        }
      });

    } catch (error) {
      console.error('Change notification error:', error);
      res.status(500).json({
        success: false,
        message: 'خطا در بروزرسانی تنظیمات نوتیفیکیشن'
      });
    }
  }
);

// 📋 فانکشن کمکی برای بررسی کد authenticator
async function verifyAuthenticatorCode(secretKey, code) {
    // این تابع باید با library authenticator یکپارچه شود
    // در حال حاضر true برمی‌گرداند برای تست
    return true;
}

// تولید کلید مخفی برای authenticator
function generateSecretKey() {
  return crypto.randomBytes(20).toString('base64');
}

// اعتبارسنجی فرمت زمان (HH:mm)
function isValidTime(time) {
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
}

module.exports = router;

export default function UserProfiles() {

    const navUserProfile = [
        {title : "پشتیبانی" ,svg : "#support-svg"},
        {title : "فعال‌سازی کارت هدیه اسنپ‌فود" ,svg : "#gift-cart"},
        {title : "معرفی فروشگاه" ,svg : "#market-svg"},
        {title : "ثبت نام فروشگاه" ,svg : "#add-shop"},
    ]

  return (
    <div>
        {navUserProfile.map(item => (
            <div className="">{item.title}</div>
        ))}
    </div>
  )
}

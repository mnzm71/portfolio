import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative" dir="rtl">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    درباره <span className="text-primary">من</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-right">
                        <h3 className="text-2xl font-semibold">
                            توسعه‌دهنده وب و خالق تکنولوژی با اشتیاق
                        </h3>

                        <p className="text-muted-foreground">
                            با بیش از ۵ سال تجربه در توسعه وب، تخصص من ایجاد برنامه‌های وب
                            پاسخگو، دسترس‌پذیر و با عملکرد بالا با استفاده از تکنولوژی‌های
                            مدرن است.
                        </p>

                        <p className="text-muted-foreground">
                            علاقه‌مند به ارائه راه‌حل‌های شیک برای مشکلات پیچیده هستم و همیشه
                            در حال یادگیری تکنولوژی‌ها و روش‌های جدید برای به‌روز ماندن در
                            دنیای همیشه در حال تحول وب هستم.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                تماس با من
                            </a>

                            <a
                                href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                دریافت رزومه
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-right">
                                    <h4 className="font-semibold text-lg">توسعه وب</h4>
                                    <p className="text-muted-foreground">
                                        ایجاد وب‌سایت‌ها و برنامه‌های وب پاسخگو با استفاده از فریمورک‌های مدرن.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-right">
                                    <h4 className="font-semibold text-lg">طراحی رابط کاربری و تجربه کاربری</h4>
                                    <p className="text-muted-foreground">
                                        طراحی رابط‌های کاربری ساده و تجربه‌های کاربری روان.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-right">
                                    <h4 className="font-semibold text-lg">مدیریت پروژه</h4>
                                    <p className="text-muted-foreground">
                                        رهبری پروژه‌ها از ایده تا اجرا با استفاده از روش‌های اجایل.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="bg-white text-slate-900">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-sm">
          <div className="font-extrabold text-xl tracking-wider text-[#122143]">
            BOXPACK
          </div>
          <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
            <a href="#services" className="hover:text-[#122143] transition">Услуги</a>
            <a href="#how-it-works" className="hover:text-[#122143] transition">Как это работает</a>
            <a href="#videofixation" className="hover:text-[#122143] transition">Видеофиксация</a>
            <a href="#calculator" className="hover:text-[#122143] transition">Калькулятор</a>
            <a href="#cases" className="hover:text-[#122143] transition">Кейсы</a>
            <a href="#contacts" className="hover:text-[#122143] transition">Контакты</a>
          </div>
        </nav>

        <div className="bg-[#1A2A52] text-white">
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs tracking-widest text-slate-400 font-semibold mb-3 block">Автоматизированный фулфилмент</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                  Фулфилмент, <br />
                  который держит <br />
                  сроки и репутацию
                </h1>
                <p className="text-slate-300 max-w-md text-sm sm:text-base leading-relaxed mb-8">
                  Автоматизированная упаковка, видеоконтроль каждого заказа и
                  отправка в день поступления. Мы берем на себя хранение, сборку,
                  маркировку и логистику.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-14">
                  <a
                    href="#calculator"
                    className="inline-flex items-center"
                  >
                    Рассчитать стоимость  <span>→</span>
                  </a>
                  <a
                    href="#contacts"
                    className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-slate-200 text-sm hover:bg-white/5 transition"
                  >Получить консультацию</a>
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-lg">
                  <div className="bg-[#324064]/60 border border-slate-700/50 p-4 rounded-xl">
                    <div className="mb-2">
                      <Image
                        src="/Truck.svg"
                        alt="Truck"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div className="font-bold text-lg text-white">5000+</div>
                    <div className="text-xs text-slate-400">заказов в день</div>
                  </div>

                  <div className="bg-[#324064]/60 border border-slate-700/50 p-4 rounded-xl">
                    <div className="mb-2">
                      <Image
                        src="/Protect.svg"
                        alt="Protect"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div className="font-bold text-lg text-white">99.8%</div>
                    <div className="text-xs text-slate-400">точность сборки</div>
                  </div>
                  <div className="bg-[#324064]/60 border border-slate-700/50 p-4 rounded-xl">
                    <div className="mb-2">
                      <Image
                        src="/Open Box.svg"
                        alt="Open Box"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div className="font-bold text-lg text-white">FBO/FBS</div>
                    <div className="text-xs text-slate-400">все маркетплейсы</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg aspect-[4/3] bg-slate-300/85 rounded-2xl flex items-center justify-center p-6 text-center text-slate-600 text-sm font-medium shadow-inner">
                  Видео автоматической упаковочной линии
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Как начать работать с нами</h2>
            <p className="text-slate-500 text-sm">Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2"> ШАГ 1</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Оставляете заявку</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Через сайт или Telegram</p>
            </div>

            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">ШАГ 2</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Получаете расчет</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Под ваш объем и формат работы</p>
            </div>

            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">ШАГ 3</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Подписываем договор</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Через ЭДО</p>
            </div>

            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">ШАГ 4</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Принимаем товар</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">От поставщика или транспортной компании</p>
            </div>

            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">ШАГ 5</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">
                  Автоматизированная <br />
                  упаковка
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">С видеоконтролем каждого этапа</p>
            </div>

            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">ШАГ 6</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Отправляем</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">На маркетплейсы по всей России</p>
            </div>

            <div className="bg-slate-100/80 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border-t-6 border-t-slate-300 border-x border-b border-slate-200/50 transition hover:shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">ШАГ 7</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">Получаете результат</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Отчеты и прозрачную статистику</p>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Услуги фулфилмента</h2>
            <p className="text-slate-500 text-sm">Полный цикл обработки товара от приемки до доставки.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Приемка и сортировка</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Принимаем поставки любого объема и размещаем товар на адресное хранение.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Проверка на брак</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Контроль качества перед отправкой покупателю.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Автоматизированная упаковка</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Автоматические линии и видеоконтроль каждого заказа.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Сборка заказов</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Быстрая комплектация заказов по данным маркетплейсов.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Отправка на маркетплейсы</h3>
              <p className="text-xs text-slate-500 leading-relaxed">FBO и FBS для всех крупных площадок.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Хранение товаров</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Безопасное адресное хранение продукции.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-6 border-t-cyan-500 border-x border-b border-slate-100 min-h-[180px] flex flex-col justify-between transition hover:shadow-lg">
              <h3 className="font-bold text-slate-900 text-base mb-2">Интеграции</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Синхронизация с маркетплейсами и CRM.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-[#1A2A52] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16">Почему выбирают BOXPACK</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
            <div className="bg-[#324064]/60 border border-slate-700/50 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between">
              <h3 className="font-bold text-base text-white">Скорость</h3>
              <p className="text-xs text-slate-400 leading-relaxed">До 20 000 товаров за смену и отправка день в день.</p>
            </div>

            <div className="bg-[#324064]/60 border border-slate-700/50 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between">
              <h3 className="font-bold text-base text-white">Точность</h3>
              <p className="text-xs text-slate-400 leading-relaxed">99.8% точность сборки благодаря автоматизации.</p>
            </div>

            <div className="bg-[#324064]/60 border border-slate-700/50 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between">
              <h3 className="font-bold text-base text-white">Надежность</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Страхование товара и круглосуточный контроль.</p>
            </div>

            <div className="bg-[#324064]/60 border border-slate-700/50 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between">
              <h3 className="font-bold text-base text-white">Поддержка</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Персональный менеджер и оперативная помощь.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
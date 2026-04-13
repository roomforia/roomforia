import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Политика конфиденциальности — Roomforia",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E1E1E] mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-gray-400 text-sm mb-12">Последнее обновление: апрель 2025</p>

          <div className="prose prose-gray max-w-none space-y-10 text-[#1E1E1E]">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Общие положения</h2>
              <p className="text-gray-500 leading-relaxed">
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок сбора, хранения, использования и защиты персональных данных пользователей платформы Roomforia (далее — «Платформа»), доступной по адресу roomforia.com, а также в мобильных приложениях Roomforia.
              </p>
              <p className="text-gray-500 leading-relaxed mt-3">
                Используя Платформу, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с её условиями, пожалуйста, прекратите использование Платформы.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Оператор персональных данных</h2>
              <p className="text-gray-500 leading-relaxed">
                Оператором персональных данных является Roomforia. По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу электронной почты: <a href="mailto:roomforia.spb@gmail.com" className="text-[#d66501] underline">roomforia.spb@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Какие данные мы собираем</h2>
              <p className="text-gray-500 leading-relaxed mb-3">Мы можем собирать следующие категории персональных данных:</p>
              <ul className="list-disc list-inside text-gray-500 space-y-2 leading-relaxed">
                <li>Контактные данные: имя, адрес электронной почты, номер телефона;</li>
                <li>Данные компании: название, должность контактного лица;</li>
                <li>Технические данные: IP-адрес, тип браузера, операционная система, данные о посещении страниц;</li>
                <li>Данные об использовании: действия в приложении, загруженные фотографии помещений, созданные дизайн-проекты;</li>
                <li>Данные из форм обратной связи и партнёрских заявок.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Цели обработки персональных данных</h2>
              <p className="text-gray-500 leading-relaxed mb-3">Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc list-inside text-gray-500 space-y-2 leading-relaxed">
                <li>Предоставление доступа к функционалу Платформы;</li>
                <li>Обработка партнёрских заявок и обратной связи;</li>
                <li>Улучшение качества сервиса и разработка новых функций;</li>
                <li>Направление информационных сообщений (при наличии согласия);</li>
                <li>Обеспечение безопасности Платформы и предотвращение мошенничества;</li>
                <li>Исполнение требований законодательства.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Правовые основания обработки</h2>
              <p className="text-gray-500 leading-relaxed">
                Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, а также в случаях, предусмотренных законодательством Российской Федерации, в частности Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Хранение и защита данных</h2>
              <p className="text-gray-500 leading-relaxed">
                Персональные данные хранятся на защищённых серверах и обрабатываются с применением технических и организационных мер безопасности. Мы не передаём персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством.
              </p>
              <p className="text-gray-500 leading-relaxed mt-3">
                Данные хранятся в течение срока, необходимого для достижения целей обработки, или до момента отзыва согласия пользователем.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Передача данных третьим лицам</h2>
              <p className="text-gray-500 leading-relaxed">
                Мы можем передавать данные следующим категориям получателей:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2 leading-relaxed mt-3">
                <li>Сервисы аналитики и мониторинга (в обезличенном виде);</li>
                <li>Почтовые и коммуникационные сервисы для обработки заявок;</li>
                <li>Государственные органы — по требованию законодательства.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Права пользователей</h2>
              <p className="text-gray-500 leading-relaxed mb-3">Вы имеете право:</p>
              <ul className="list-disc list-inside text-gray-500 space-y-2 leading-relaxed">
                <li>Получить информацию об обработке ваших персональных данных;</li>
                <li>Потребовать исправления неточных данных;</li>
                <li>Отозвать согласие на обработку персональных данных;</li>
                <li>Потребовать удаления персональных данных;</li>
                <li>Обратиться с жалобой в уполномоченный орган по защите прав субъектов персональных данных.</li>
              </ul>
              <p className="text-gray-500 leading-relaxed mt-3">
                Для реализации ваших прав обратитесь по адресу: <a href="mailto:roomforia.spb@gmail.com" className="text-[#d66501] underline">roomforia.spb@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Файлы cookie</h2>
              <p className="text-gray-500 leading-relaxed">
                Платформа использует файлы cookie для обеспечения корректной работы сервиса, анализа трафика и персонализации. Вы можете отключить cookie в настройках браузера, однако это может повлиять на функциональность Платформы.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Изменения Политики</h2>
              <p className="text-gray-500 leading-relaxed">
                Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице. Продолжение использования Платформы после внесения изменений означает ваше согласие с обновлённой редакцией.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Контакты</h2>
              <p className="text-gray-500 leading-relaxed">
                По любым вопросам, связанным с настоящей Политикой, обращайтесь:<br />
                Email: <a href="mailto:roomforia.spb@gmail.com" className="text-[#d66501] underline">roomforia.spb@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

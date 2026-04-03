import React from 'react';
import { Bell, User, LogOut, Mail, Lock, Phone } from '../Icons';

const Header = () => {
  return (
    <header className="inset-x-0 top-0 z-40 sticky">
      <nav className="bg-white">
        <div className="lg:pl-64 lg:pr-10 px-2 border-b border-gray-100">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                <a href="/resources/" className="inline-flex items-center border-b-2 px-1 pt-1 text-sm text-gray-700 hover:border-blue-300 hover:text-gray-700 font-medium border-transparent">
                  Ресурсы
                </a>
                <a href="https://online-edu.mirea.ru/login/" className="inline-flex items-center border-b-2 px-1 pt-1 text-sm text-gray-700 hover:border-blue-300 hover:text-gray-700 font-medium border-transparent">
                  Дистанционное обучение
                </a>
                <a href="#" className="inline-flex items-center border-b-2 px-1 pt-1 text-sm text-gray-700 hover:border-blue-300 hover:text-gray-700 font-medium border-transparent">
                  Техническая поддержка
                </a>
                <a href="/services/send-mail-digital/" className="inline-flex items-center border-b-2 px-1 pt-1 text-sm text-gray-700 hover:border-blue-300 hover:text-gray-700 font-medium border-transparent">
                  Обращение к ректору
                </a>
              </div>
            </div>
            
            <div className="-mr-2 flex items-center lg:hidden flex-1">
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Открыть меню</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            
            <div className="lg:ml-6 flex">
              <div className="inline-flex items-center cursor-pointer select-none" id="user-menu-div">
                <p>Гнатюк Д.</p>
                <div className="relative ml-3">
                  <div className="inline-flex items-center">
                    <img className="h-8 w-8 rounded-full mr-2 object-center object-cover" src="/profile_photo.php" alt="Photo" />
                    <svg className="text-gray-400 ml-auto h-5 w-5 shrink-0 rotate-90" viewBox="0 0 20 20" fill="fill-gray-700" aria-hidden="true" id="user_menu_icon">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="hidden absolute top-12 lg:right-6 right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-4 pb-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1" id="user_menu">
                <form method="post">
                  <div className="grid grid-cols-2 gap-4 items-center mb-4">
                    <div>
                      <button type="submit" name="selectStudentProfile" value="8253baee-30e0-431a-94cd-b725ecf78d97" className="text-white bg-blue-600 rounded-xl text-xs px-4 py-1.5">
                        23У0496
                      </button>
                    </div>
                  </div>
                </form>
                
                <div className="flex flex-col gap-3">
                  <a href="/profile/change_email/" className="inline-flex items-center text-sm text-gray-700 font-bold" role="menuitem" tabIndex="-1">
                    <Mail className="text-gray-800 w-6 h-6 mr-2" />
                    Изменить e-mail
                  </a>
                  <a href="/profile/change_password/" className="inline-flex items-center text-sm text-gray-700 font-bold" role="menuitem" tabIndex="-1">
                    <Lock className="w-6 h-6 mr-2 text-gray-800" />
                    Изменить пароль
                  </a>
                  <a href="/profile/change_phone/" className="inline-flex items-center text-sm text-gray-700 font-bold" role="menuitem" tabIndex="-1">
                    <Phone className="w-6 h-6 mr-2 text-gray-800" />
                    Изменить телефон
                  </a>
                  <a href="/?logout=yes" className="inline-flex items-center text-sm text-gray-700 font-bold" role="menuitem" tabIndex="-1">
                    <LogOut className="w-6 h-6 mr-2" />
                    Выйти
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
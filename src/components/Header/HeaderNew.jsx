import React from 'react';
import { Bell, User, LogOut, Mail, Lock, Phone, Menu } from '../Icons';

const Header = () => {
  return (
    <header className="inset-x-0 top-0 z-50 sticky">
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="lg:pl-64 lg:pr-8 px-4">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <div className="hidden lg:ml-6 lg:flex lg:space-x-6">
                <a href="/resources/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                  Ресурсы
                </a>
                <a href="https://online-edu.mirea.ru/login/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                  Дистанционное обучение
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                  Техническая поддержка
                </a>
                <a href="/services/send-mail-digital/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                  Обращение к ректору
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-blue-700 focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
              
              <button className="relative p-2 text-gray-600 hover:text-blue-700 rounded-lg">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="relative group">
                <button className="flex items-center space-x-3 p-2 rounded-lg transition-colors">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="hidden lg:block text-left">
                    <div className="text-sm font-bold text-gray-900">Гнатюк Д.</div>
                    <div className="text-xs text-gray-600">23У0496</div>
                  </div>
                  <svg className="text-gray-400 h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="absolute right-0 top-12 z-10 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-xl border border-gray-100 focus:outline-none hidden group-hover:block">
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mr-3">
                        <User className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Гнатюк Даниил</div>
                        <div className="text-sm text-gray-600">23У0496</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <a href="/profile/change_email/" className="flex items-center p-3 text-sm text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                        <Mail className="h-5 w-5 text-gray-600 mr-3" />
                        Изменить e-mail
                      </a>
                      <a href="/profile/change_password/" className="flex items-center p-3 text-sm text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                        <Lock className="h-5 w-5 text-gray-600 mr-3" />
                        Изменить пароль
                      </a>
                      <a href="/profile/change_phone/" className="flex items-center p-3 text-sm text-gray-700 hover:text-blue-700 rounded-lg transition-colors">
                        <Phone className="h-5 w-5 text-gray-600 mr-3" />
                        Изменить телефон
                      </a>
                      <div className="border-t border-gray-100 pt-2">
                        <a href="/?logout=yes" className="flex items-center p-3 text-sm text-red-600 hover:text-red-700 rounded-lg transition-colors">
                          <LogOut className="h-5 w-5 mr-3" />
                          Выйти из системы
                        </a>
                      </div>
                    </div>
                  </div>
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
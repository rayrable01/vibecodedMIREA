import React, { useState } from 'react';
import { X, Menu, Home, MessageSquare, Calendar, BookOpen, GraduationCap, Settings, User, FileEdit } from '../Icons';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: 'Профиль',
      icon: <Home className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/',
      active: true
    },
    {
      name: 'Новости и уведомления',
      icon: <MessageSquare className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/livestream/'
    },
    {
      name: 'Расписание',
      icon: <Calendar className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/schedule/'
    },
    {
      name: 'Обучение',
      icon: <BookOpen className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/learning/'
    },
    {
      name: 'Образовательная программа',
      icon: <GraduationCap className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/learning_program/'
    },
    {
      name: 'Сервисы',
      icon: <Settings className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/services/'
    },
    {
      name: 'Анкета оценки',
      icon: <FileEdit className="h-6 w-6 shrink-0 text-blue-600" />,
      href: '/questionnaire/'
    }
  ];

  const socialLinks = [
    { name: 'Telegram', href: 'https://telegram.me/rtumirea_official', icon: 'TG' },
    { name: 'Tik-tok', href: 'https://www.tiktok.com/@rtu.mirea', icon: 'TT' },
    { name: 'Rutube', href: 'https://rutube.ru/channel/23657936/', icon: 'RT' }
  ];

  return (
    <>
      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-blue-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Открыть меню</span>
        {isOpen ? (
          <X className="block h-6 w-6" />
        ) : (
          <Menu className="block h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex h-20 items-center justify-between px-6 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-blue-700" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">РТУ МИРЭА</div>
                  <div className="text-blue-200 text-xs">Личный кабинет</div>
                </div>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Закрыть меню</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-4 py-6 h-[calc(100vh-80px)] overflow-y-auto">
              <div className="mb-8">
                <div className="flex items-center p-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mr-3">
                    <User className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Гнатюк Даниил</div>
                    <div className="text-sm text-gray-600">23У0496</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`${
                      item.active ? 'text-blue-700 font-semibold' : 'text-gray-800 hover:text-blue-700'
                    } group flex items-center rounded-lg px-4 py-3 text-base transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3 p-2 rounded-lg">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-100">
                <div className="flex space-x-4 justify-center mb-6">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href} 
                      className="text-gray-500 hover:text-blue-600 p-2 rounded-lg"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{link.name}</span>
                      <span className="text-xs font-medium">{link.icon}</span>
                    </a>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-500">
                  © 2026 РТУ МИРЭА
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
import React from 'react';
import { 
  Home, MessageSquare, Calendar, BookOpen, GraduationCap, Settings, Users, FileText, Award, Building, 
  CreditCard, ClipboardList, Cpu, Brain, Gamepad2, Briefcase, Heart, User, ChevronRight, FileEdit
} from '../Icons';

const Sidebar = () => {
  const menuItems = [
    {
      name: 'Профиль',
      icon: <Home className="h-5 w-5 text-blue-600" />,
      href: '/',
      active: true
    },
    {
      name: 'Новости и уведомления',
      icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
      href: '/livestream/'
    },
    {
      name: 'Расписание',
      icon: <Calendar className="h-5 w-5 text-blue-600" />,
      href: '/schedule/'
    },
    {
      name: 'Обучение',
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      subItems: [
        { name: 'Посещаемость', href: '/learning/attendance/', icon: <Calendar className="h-4 w-4 text-blue-500" /> },
        { name: 'Электронная зачетная книжка', href: '/learning/scores/', icon: <FileText className="h-4 w-4 text-blue-500" /> },
        { name: 'Академические задолженности', href: '/learning/debt/', icon: <ClipboardList className="h-4 w-4 text-blue-500" /> },
        { name: 'Читательский билет', href: '/learning/library/', icon: <BookOpen className="h-4 w-4 text-blue-500" /> },
        { name: 'Преподаватели', href: '/learning/lectors/', icon: <Users className="h-4 w-4 text-blue-500" /> },
        { name: 'Приказы', href: '/learning/reports/', icon: <FileText className="h-4 w-4 text-blue-500" /> },
        { name: 'Электронный журнал', href: '/learning/e_journal/', icon: <FileText className="h-4 w-4 text-blue-500" /> },
        { name: 'Занятия физкультурой', href: '/learning/kfv/', icon: <Award className="h-4 w-4 text-blue-500" /> },
        { name: 'Достижения в БРС', href: '/services/brs_portfolio/', icon: <Award className="h-4 w-4 text-blue-500" /> }
      ]
    },
    {
      name: 'Образовательная программа',
      icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
      subItems: [
        { name: 'Учебный план', href: '/learning_program/plan/', icon: <FileText className="h-4 w-4 text-blue-500" /> },
        { name: 'Траектория', href: '/learning_program/roadmap/', icon: <Settings className="h-4 w-4 text-blue-500" /> },
        { name: 'Анкета качества образования', href: 'https://opros.mirea.ru/auth/', icon: <Settings className="h-4 w-4 text-blue-500" /> }
      ]
    },
    {
      name: 'Сервисы',
      icon: <Settings className="h-5 w-5 text-blue-600" />,
      subItems: [
        { name: 'Воинский учет', href: '/services/army/', icon: <Users className="h-4 w-4 text-blue-500" /> },
        { name: 'Оплата услуг', href: '/services/contracts/', icon: <CreditCard className="h-4 w-4 text-blue-500" /> },
        { name: 'Заявления', href: '/services/request/', icon: <ClipboardList className="h-4 w-4 text-blue-500" /> },
        { name: 'Заявки по общежитиям', href: '/services/hostel_requests/', icon: <Home className="h-4 w-4 text-blue-500" /> },
        { name: 'Обходной лист', href: '/services/bypass_list/', icon: <Building className="h-4 w-4 text-blue-500" /> },
        { name: 'Техноковоркинг', href: '/services/technocoworking/', icon: <Cpu className="h-4 w-4 text-blue-500" /> },
        { name: 'Мегалаборатории', href: 'https://student.mirea.ru/login', icon: <Settings className="h-4 w-4 text-blue-500" /> },
        { name: 'Приём психолога', href: '/services/psychologist/', icon: <Brain className="h-4 w-4 text-blue-500" /> },
        { name: 'Киберзона', href: 'https://esports.mirea.ru/', icon: <Gamepad2 className="h-4 w-4 text-blue-500" /> },
        { name: 'Портфолио', href: '/services/portfolio/', icon: <Briefcase className="h-4 w-4 text-blue-500" /> },
        { name: 'Фонд РТУ МИРЭА', href: 'https://fund.mirea.ru/', icon: <Heart className="h-4 w-4 text-blue-500" /> }
      ]
    },
    {
      name: 'Анкета оценки',
      icon: <FileEdit className="h-5 w-5 text-blue-600" />,
      href: '/questionnaire/'
    }
  ];

  const socialLinks = [
    { name: 'Telegram', href: 'https://telegram.me/rtumirea_official', icon: 'TG' },
    { name: 'Tik-tok', href: 'https://www.tiktok.com/@rtu.mirea', icon: 'TT' },
    { name: 'Rutube', href: 'https://rutube.ru/channel/23657936/', icon: 'RT' }
  ];

  return (
    <aside id="default-sidebar" className="fixed left-0 top-0 z-50 w-64 h-screen bg-white border-r border-gray-100 shadow-xl">
      {/* Синий заголовок с высотой как у header */}
      <div className="flex justify-center h-16 shrink-0 items-center bg-gradient-to-r from-blue-600 to-blue-800">
        <a href="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-3">
            <GraduationCap className="h-6 w-6 text-blue-700" />
          </div>
          <div className="text-left">
            <div className="text-white font-bold text-base">РТУ МИРЭА</div>
            <div className="text-blue-200 text-xs">Личный кабинет</div>
          </div>
        </a>
      </div>
      
      <nav className="flex flex-col px-4 py-4 h-[calc(100vh-64px)] overflow-y-auto">
        <ul role="list" className="space-y-1 list-none pl-0">
          {menuItems.map((item, index) => (
            <li key={index} className="rounded-lg transition-all duration-200">
              {item.subItems ? (
                <div>
                  <button type="button" className="cursor-pointer flex items-center w-full text-left rounded-lg p-3 gap-x-3 text-sm font-medium text-gray-800 parentElement">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                    <span className="flex-1 text-left">{item.name}</span>
                    <ChevronRight className="text-gray-400 h-4 w-4 shrink-0" />
                  </button>
                  <ul className="hidden mt-1 ml-8 childElement space-y-1 list-none pl-0">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="rounded-lg">
                        <a href={subItem.href} className="group flex gap-x-3 rounded-lg p-2 text-sm font-medium text-gray-700 hover:text-blue-700 items-center">
                          <span className="text-blue-500">
                            {subItem.icon}
                          </span>
                          <span className="text-left">{subItem.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a 
                  href={item.href} 
                  className={`${item.active ? 'text-blue-700 font-semibold' : 'text-gray-800 hover:text-blue-700'} group flex gap-x-3 rounded-lg p-3 text-sm transition-all duration-200 items-center`}
                >
                  <div className={`${item.active ? 'text-blue-600' : 'text-gray-600'}`}>
                    {item.icon}
                  </div>
                  <span className="text-left">{item.name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex justify-center space-x-3 mb-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-500 hover:text-blue-600 p-1.5 rounded-lg transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                <span className="text-xs font-medium">{link.icon}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500">
            © 2026 <a href="https://mirea.ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">МИРЭА - Российский технологический университет</a>
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
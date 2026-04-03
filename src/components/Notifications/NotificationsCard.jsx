import React from 'react';
import { Bell, MessageSquare, Calendar, Award, BookOpen } from '../Icons';

const NotificationsCard = () => {
  const notifications = [
    {
      id: 1,
      type: 'schedule',
      icon: <Calendar className="h-5 w-5 text-blue-600" />,
      title: 'Изменение в расписании',
      description: 'Пары на 15 сентября перенесены',
      time: '2 часа назад',
      unread: true
    },
    {
      id: 2,
      type: 'grade',
      icon: <Award className="h-5 w-5 text-green-600" />,
      title: 'Новая оценка',
      description: 'По предмету "Базы данных" выставлена оценка',
      time: '5 часов назад',
      unread: true
    },
    {
      id: 3,
      type: 'news',
      icon: <MessageSquare className="h-5 w-5 text-purple-600" />,
      title: 'Новость от института',
      description: 'Заседание студенческого совета 20 сентября',
      time: '1 день назад',
      unread: false
    },
    {
      id: 4,
      type: 'library',
      icon: <BookOpen className="h-5 w-5 text-orange-600" />,
      title: 'Напоминание о книге',
      description: 'Срок сдачи книги в библиотеку истекает 25 сентября',
      time: '2 дня назад',
      unread: false
    }
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
      <div className="lg:px-8 px-6 py-6">
        <div className="flex flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">Последние уведомления</h3>
            <p className="text-gray-600 mt-1">Новые сообщения и обновления</p>
          </div>
          <a href="/livestream/" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Все →
          </a>
        </div>
        
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`flex items-start space-x-4 p-4 rounded-xl border ${notification.unread ? 'border-blue-200' : 'border-gray-200'} transition-colors`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold text-gray-900">{notification.title}</h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{notification.description}</p>
              </div>
              {notification.unread && (
                <div className="flex-shrink-0 mt-0.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Непрочитанных: <span className="font-bold text-blue-600">2</span>
            </div>
            <a href="/settings/notifications/" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Настройки →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
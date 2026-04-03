import React from 'react';
import { AlertTriangle, CheckCircle, Info } from '../Icons';

const AlertsCard = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
      title: 'Необходимо предоставить справку о состоянии здоровья',
      date: '01.09.2025',
      description: 'Справка необходима для допуска к занятиям по физической культуре'
    },
    {
      id: 2,
      type: 'info',
      icon: <Info className="h-5 w-5 text-blue-600" />,
      title: 'Начало нового учебного семестра',
      date: '01.09.2025',
      description: '6 семестр начинается с 1 сентября 2025 года'
    },
    {
      id: 3,
      type: 'success',
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      title: 'Оплата за обучение подтверждена',
      date: '15.08.2025',
      description: 'Оплата за 5 семестр успешно подтверждена'
    }
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
      <div className="lg:px-8 px-6 py-6">
        <div className="flex flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">Уведомления</h3>
            <p className="text-gray-600 mt-1">Важные оповещения и напоминания</p>
          </div>
          <a href="/livestream/" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Все уведомления →
          </a>
        </div>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-4 p-4 rounded-xl border border-gray-200 transition-colors">
              <div className="flex-shrink-0 mt-0.5">
                {alert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold text-gray-900">{alert.title}</h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{alert.date}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Всего уведомлений: <span className="font-bold text-gray-900">3</span>
            </div>
            <a href="/settings/notifications/" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Настройки уведомлений →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsCard;
import React from 'react';
import Header from './components/Header/HeaderNew';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileCard from './components/Profile/ProfileCardNew';
import PaymentCard from './components/Payment/PaymentCard';
import AlertsCard from './components/Alerts/AlertsCard';
import InfoCard from './components/Info/InfoCard';
import NotificationsCard from './components/Notifications/NotificationsCard';
import MobileMenu from './components/MobileMenu/MobileMenu';
import { Calendar, Award, CreditCard, ClipboardList } from './components/Icons';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <MobileMenu />
      
      <main className="lg:pl-64">
        <div className="lg:px-10 px-4 py-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="lg:space-y-8 space-y-6">
              <ProfileCard />
              
              <div className="grid lg:grid-cols-2 lg:gap-8 gap-6">
                <PaymentCard />
                <AlertsCard />
              </div>
              
              <div className="grid lg:grid-cols-2 lg:gap-8 gap-6">
                <InfoCard />
                <NotificationsCard />
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Быстрые ссылки</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                  <a href="/schedule/" className="flex flex-col items-center justify-center p-8 rounded-2xl hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-blue-700" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">Расписание</span>
                    <span className="text-sm text-gray-600 mt-2 text-center">Просмотр занятий и пар</span>
                  </a>
                  
                  <a href="/learning/scores/" className="flex flex-col items-center justify-center p-8 rounded-2xl hover:border-green-300 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-green-700" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">Зачетная книжка</span>
                    <span className="text-sm text-gray-600 mt-2 text-center">Успеваемость и оценки</span>
                  </a>
                  
                  <a href="/services/contracts/" className="flex flex-col items-center justify-center p-8 rounded-2xl hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4">
                      <CreditCard className="h-8 w-8 text-purple-700" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">Оплата обучения</span>
                    <span className="text-sm text-gray-600 mt-2 text-center">Договоры и платежи</span>
                  </a>
                  
                  <a href="/learning/attendance/" className="flex flex-col items-center justify-center p-8 rounded-2xl hover:border-orange-300 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4">
                      <ClipboardList className="h-8 w-8 text-orange-700" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">Посещаемость</span>
                    <span className="text-sm text-gray-600 mt-2 text-center">Статистика посещений</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-8">Важная информация</h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Академический календарь</h4>
                    <p className="text-gray-600 mb-4">Даты сессий, каникул и учебных периодов</p>
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Подробнее →</a>
                  </div>
                  <div className="rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Стипендия</h4>
                    <p className="text-gray-600 mb-4">Информация о выплатах и условиях получения</p>
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Подробнее →</a>
                  </div>
                  <div className="rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Библиотека</h4>
                    <p className="text-gray-600 mb-4">Электронные ресурсы и каталоги литературы</p>
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Подробнее →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
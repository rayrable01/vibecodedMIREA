import React from 'react';
import { Eye, EyeOff, User, Mail, Phone, Calendar } from '../Icons';

const ProfileCard = () => {
  const userData = {
    name: 'Гнатюк Даниил Александрович',
    group: 'УИБО-04-23',
    course: 'Курс 3',
    status: 'Активный студент',
    login: 'gnatyuk.d.a@edu.mirea.ru',
    gender: 'Мужской',
    personalNumber: '23У0496',
    email: 'gnatiukdanya@gmail.com',
    age: '21 лет (18.08.2004)',
    paymentType: 'Сверхплановое место',
    phone: '+7 (999) 999-99-76',
    institute: 'Институт технологий управления',
    department: 'Кафедра информационных технологий в государственном управлении',
    specialty: 'Бизнес-информатика (Управление ИТ-инфраструктурой организации)',
    form: 'Очная',
    targetAdmission: 'Нет'
  };

  const [showPhone, setShowPhone] = React.useState(true);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
      <div className="lg:p-8 p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Аватар с иконкой */}
          <div className="lg:mr-10 mr-0 lg:mb-0 mb-6">
            <div className="relative">
              <div className="lg:h-48 lg:w-48 h-40 w-40 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                <User className="lg:h-32 lg:w-32 h-24 w-24 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Онлайн
              </div>
            </div>
          </div>
          
          {/* Основная информация */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
              <div>
                <h1 className="lg:text-4xl text-2xl font-extrabold text-gray-900 mb-2">{userData.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl lg:text-lg text-base px-5 py-2 font-bold shadow-md">
                    {userData.group}
                  </span>
                  <span className="text-gray-900 rounded-xl lg:text-lg text-base px-4 py-2 font-bold">
                    {userData.course}
                  </span>
                  <span className="text-green-700 rounded-xl lg:text-lg text-base px-4 py-2 font-bold lg:block hidden">
                    {userData.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0">
                <div className="rounded-xl p-4">
                  <div className="text-sm text-gray-600 font-medium">Личный номер</div>
                  <div className="text-2xl font-bold text-blue-800">{userData.personalNumber}</div>
                </div>
              </div>
            </div>
            
            <p className="text-green-700 rounded-xl px-4 py-2 font-bold lg:hidden inline-block mb-6">
              {userData.status}
            </p>
            
            {/* Детальная информация */}
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
              <div className="rounded-xl p-4 border border-gray-200">
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <div className="font-medium text-gray-900">Контактная информация</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600">Логин</div>
                    <div className="font-bold text-gray-900 truncate">{userData.login}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-bold text-gray-900 truncate">{userData.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Телефон</div>
                    <div 
                      className="font-bold text-gray-900 flex items-center gap-2 cursor-pointer hover:text-blue-700 transition-colors"
                      onClick={() => setShowPhone(!showPhone)}
                    >
                      {showPhone ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span>
                        {showPhone ? userData.phone : '••• ••• •• 76'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl p-4 border border-gray-200">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <div className="font-medium text-gray-900">Личные данные</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-sm text-gray-600">Пол</div>
                    <div className="font-bold text-gray-900">{userData.gender}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Возраст</div>
                    <div className="font-bold text-gray-900">{userData.age}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-sm text-gray-600">Вид возмещения затрат</div>
                    <div className="font-bold text-gray-900">{userData.paymentType}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
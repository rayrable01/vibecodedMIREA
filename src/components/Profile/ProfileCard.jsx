import React from 'react';

import { Eye, EyeOff } from 'lucide-react';

const ProfileCard = () => {
  const userData = {
    name: 'Гнатюк Даниил Александрович',
    group: 'УИБО-04-23',
    course: 'Курс 3',
    status: 'активный',
    login: 'gnatyuk.d.a@edu.mirea.ru',
    gender: 'Мужской',
    personalNumber: '23У0496',
    email: 'gnatiukdanya@gmail.com',
    age: '21 лет (18.08.2004)',
    paymentType: 'Сверхплановое место',
    phone: '+7 (***) ***-**-76',
    institute: 'Институт технологий управления',
    department: 'Кафедра информационных технологий в государственном управлении',
    specialty: 'Бизнес-информатика (Управление ИТ-инфраструктурой организации)',
    form: 'Очная',
    targetAdmission: 'Нет'
  };

  const [showPhone, setShowPhone] = React.useState(false);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="lg:p-3 p-2 flex">
        <div className="lg:pl-4 flex-shrink-0">
          <span className="relative inline-block">
            <img className="lg:h-56 lg:w-56 h-28 w-28 rounded-full object-center object-cover" src="/profile_photo.php" alt="Profile" />
          </span>
        </div>
        
        <div className="lg:ml-12 ml-6">
          <h1 className="lg:text-3xl text-xl font-extrabold">{userData.name}</h1>
          
          <div className="flex items-center lg:space-x-10 space-x-5 my-4">
            <p className="text-white bg-blue-800 rounded-2xl lg:text-lg text-sm px-4 py-1.5">
              {userData.group}
            </p>
            <p className="lg:text-lg text-sm text-gray-900">{userData.course}</p>
            <p className="lg:text-lg text-sm text-gray-900 lg:block hidden">{userData.status}</p>
          </div>
          
          <p className="lg:text-lg text-sm text-gray-900 lg:hidden">{userData.status}</p>
          
          <dl className="lg:mx-4 lg:block hidden">
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-5 items-center mb-4">
              <div>
                <dt className="text-gray-500 lg:text-base text-sm">Логин</dt>
                <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.login}</dd>
              </div>
              
              <div>
                <dt className="text-gray-500 lg:text-base text-sm">Пол</dt>
                <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.gender}</dd>
              </div>
              
              <div>
                <dt className="text-gray-500 lg:text-base text-sm">Личный номер</dt>
                <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.personalNumber}</dd>
              </div>
              
              <div className="overflow-hidden">
                <dt className="text-gray-500 lg:text-base text-sm">Почта</dt>
                <dd className="font-semibold text-gray-900 lg:text-base text-sm truncate">{userData.email}</dd>
              </div>
              
              <div>
                <dt className="text-gray-500 lg:text-base text-sm">Возраст</dt>
                <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.age}</dd>
              </div>
              
              <div>
                <dt className="text-gray-500 lg:text-base text-sm">Вид возмещ. затрат</dt>
                <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.paymentType}</dd>
              </div>
              
              <div>
                <dt className="text-gray-500 lg:text-base text-sm">Контактный номер</dt>
                <dd 
                  className="font-semibold text-gray-900 lg:text-base text-sm flex items-center gap-2 cursor-pointer"
                  onClick={() => setShowPhone(!showPhone)}
                >
                  {showPhone ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                  <span>
                    {showPhone ? userData.phone.replace('***', '999').replace('**', '99') : userData.phone}
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      
      <dl className="mx-4 lg:hidden">
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-7 gap-5 items-center mb-4">
          <div className="overflow-hidden">
            <dt className="text-gray-500 lg:text-base text-sm">Логин</dt>
            <dd className="font-semibold text-gray-900 lg:text-base text-sm truncate">{userData.login}</dd>
          </div>
          
          <div>
            <dt className="text-gray-500 lg:text-base text-sm">Пол</dt>
            <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.gender}</dd>
          </div>
          
          <div>
            <dt className="text-gray-500 lg:text-base text-sm">Личный номер</dt>
            <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.personalNumber}</dd>
          </div>
          
          <div className="overflow-hidden">
            <dt className="text-gray-500 lg:text-base text-sm">Почта</dt>
            <dd className="font-semibold text-gray-900 lg:text-base text-sm truncate">{userData.email}</dd>
          </div>
          
          <div>
            <dt className="text-gray-500 lg:text-base text-sm">Возраст</dt>
            <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.age}</dd>
          </div>
          
          <div>
            <dt className="text-gray-500 lg:text-base text-sm">Вид возмещ. затрат</dt>
            <dd className="font-semibold text-gray-900 lg:text-base text-sm">{userData.paymentType}</dd>
          </div>
          
          <div>
            <dt className="text-gray-500 lg:text-base text-sm">Контактный номер</dt>
            <dd 
              className="font-semibold text-gray-900 lg:text-base text-sm flex items-center gap-2 cursor-pointer"
              onClick={() => setShowPhone(!showPhone)}
            >
              {showPhone ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
              <span>
                {showPhone ? userData.phone.replace('***', '999').replace('**', '99') : userData.phone}
              </span>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default ProfileCard;
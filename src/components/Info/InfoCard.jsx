import React from 'react';
import { Building, GraduationCap, BookOpen, Target, Calendar, Users, Award } from '../Icons';

const InfoCard = () => {
  const infoData = {
    institute: 'Институт технологий управления',
    department: 'Кафедра информационных технологий в государственном управлении',
    specialty: 'Бизнес-информатика (Управление ИТ-инфраструктурой организации)',
    form: 'Очная',
    targetAdmission: 'Нет',
    level: 'Бакалавриат',
    startYear: '2023',
    endYear: '2027'
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
      <div className="lg:px-8 px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-extrabold text-gray-900">Информация об обучении</h3>
          <div className="text-blue-800 font-bold px-4 py-2 rounded-lg border border-blue-200">
            Учебный год 2025/2026
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-blue-700" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">Институт</h4>
              <p className="text-gray-700">{infoData.institute}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-blue-700" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">Кафедра</h4>
              <p className="text-gray-700">{infoData.department}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-1">Специальность</h4>
              <p className="text-gray-700">{infoData.specialty}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-bold text-gray-900">Форма обучения</h4>
              </div>
              <p className="text-gray-700 font-medium">{infoData.form}</p>
            </div>
            
            <div className="rounded-lg p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-bold text-gray-900">Целевое поступление</h4>
              </div>
              <p className="text-gray-700 font-medium">{infoData.targetAdmission}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-bold text-gray-900">Уровень образования</h4>
              </div>
              <p className="text-gray-700 font-medium">{infoData.level}</p>
            </div>
            
            <div className="rounded-lg p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-bold text-gray-900">Срок обучения</h4>
              </div>
              <p className="text-gray-700 font-medium">{infoData.startYear} - {infoData.endYear}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Статус обучения: <span className="font-bold text-green-700">Активный</span>
            </div>
            <a href="/learning_program/" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Подробнее об учебном плане →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
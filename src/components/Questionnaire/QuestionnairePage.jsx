import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Star, MessageSquare, Send, ArrowLeft, Book, Users, Clock, Target } from '../Icons';

const QuestionnairePage = () => {
  const navigate = useNavigate();
  
  const teachers = [
    { id: 1, name: 'Иванов Иван Иванович', subject: 'Математика' },
    { id: 2, name: 'Петрова Анна Сергеевна', subject: 'Физика' },
    { id: 3, name: 'Сидоров Алексей Владимирович', subject: 'Программирование' },
    { id: 4, name: 'Козлова Мария Дмитриевна', subject: 'Базы данных' },
    { id: 5, name: 'Николаев Денис Петрович', subject: 'Алгоритмы' },
    { id: 6, name: 'Федорова Елена Александровна', subject: 'Веб-разработка' },
    { id: 7, name: 'Морозов Сергей Игоревич', subject: 'Искусственный интеллект' },
    { id: 8, name: 'Волкова Ольга Викторовна', subject: 'Сети и коммуникации' }
  ];

  const [formData, setFormData] = useState({
    teacherId: '',
    knowledgeQuality: 5,
    teachingMethod: 5,
    communicationSkills: 5,
    workloadFairness: 5,
    argumentation: '',
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные анкеты:', formData);
    setFormData({ ...formData, submitted: true });
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (category, rating) => {
    setFormData({ ...formData, [category]: rating });
  };

  const selectedTeacher = teachers.find(t => t.id === parseInt(formData.teacherId));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Анкета оценки преподавателя
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Пожалуйста, заполните форму для оценки качества преподавания. Ваше мнение поможет улучшить образовательный процесс.
          </p>
        </div>

        {/* Карточка формы */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Заголовок карточки */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <User className="h-7 w-7 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Оценка преподавателя</h2>
                  <p className="text-blue-200 text-sm">Заполните все поля формы</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                На главную
              </button>
            </div>
          </div>

          {/* Форма */}
          <div className="px-8 py-10">
            {formData.submitted ? (
              <div className="text-center py-12">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Анкета успешно отправлена!
                </h3>
                <p className="text-gray-600 mb-8">
                  Спасибо за вашу оценку. Ваше мнение очень важно для нас.
                </p>
                <div className="animate-pulse">
                  <div className="h-2 bg-green-200 rounded-full w-64 mx-auto"></div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Перенаправление на главную страницу...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Выбор преподавателя */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      Выберите преподавателя
                    </div>
                  </label>
                  <select
                    name="teacherId"
                    value={formData.teacherId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-white"
                  >
                    <option value="">Выберите преподавателя из списка</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name} ({teacher.subject})
                      </option>
                    ))}
                  </select>
                  {selectedTeacher && (
                    <div className="mt-3 p-3 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        Выбран: <span className="font-bold">{selectedTeacher.name}</span> - {selectedTeacher.subject}
                      </p>
                    </div>
                  )}
                </div>

                {/* Критерии оценки */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Target className="h-6 w-6 text-blue-600 mr-2" />
                    Критерии оценки
                  </h3>
                  
                  {/* Качество знаний */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Book className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Качество преподаваемого материала</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {formData.knowledgeQuality}.0
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange('knowledgeQuality', star)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            star <= formData.knowledgeQuality
                              ? 'text-yellow-500'
                              : 'text-gray-300 hover:text-yellow-400'
                          }`}
                        >
                          <Star className="h-7 w-7" fill={star <= formData.knowledgeQuality ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Очень плохо</span>
                      <span>Отлично</span>
                    </div>
                  </div>

                  {/* Методика преподавания */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Методика преподавания</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {formData.teachingMethod}.0
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange('teachingMethod', star)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            star <= formData.teachingMethod
                              ? 'text-yellow-500'
                              : 'text-gray-300 hover:text-yellow-400'
                          }`}
                        >
                          <Star className="h-7 w-7" fill={star <= formData.teachingMethod ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Не понятно</span>
                      <span>Очень понятно</span>
                    </div>
                  </div>

                  {/* Коммуникативные навыки */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Коммуникативные навыки</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {formData.communicationSkills}.0
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange('communicationSkills', star)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            star <= formData.communicationSkills
                              ? 'text-yellow-500'
                              : 'text-gray-300 hover:text-yellow-400'
                          }`}
                        >
                          <Star className="h-7 w-7" fill={star <= formData.communicationSkills ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Не доступен</span>
                      <span>Очень доступен</span>
                    </div>
                  </div>

                  {/* Справедливость нагрузки */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Справедливость нагрузки</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {formData.workloadFairness}.0
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange('workloadFairness', star)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            star <= formData.workloadFairness
                              ? 'text-yellow-500'
                              : 'text-gray-300 hover:text-yellow-400'
                          }`}
                        >
                          <Star className="h-7 w-7" fill={star <= formData.workloadFairness ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Не справедливо</span>
                      <span>Очень справедливо</span>
                    </div>
                  </div>
                </div>

                {/* Аргументация */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                      Комментарии и предложения
                    </div>
                  </label>
                  <textarea
                    name="argumentation"
                    value={formData.argumentation}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Опишите подробно ваши впечатления, что понравилось, а что можно улучшить..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-white placeholder-gray-500 resize-none"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Ваши комментарии помогут преподавателю стать лучше
                  </p>
                </div>

                {/* Итоговая оценка */}
                <div className="rounded-xl p-6 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="h-5 w-5 text-blue-600 mr-2" />
                    Итоговая оценка
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">{formData.knowledgeQuality}.0</div>
                      <div className="text-sm text-gray-600">Качество знаний</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">{formData.teachingMethod}.0</div>
                      <div className="text-sm text-gray-600">Методика</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">{formData.communicationSkills}.0</div>
                      <div className="text-sm text-gray-600">Коммуникация</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">{formData.workloadFairness}.0</div>
                      <div className="text-sm text-gray-600">Нагрузка</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">
                      Средняя оценка: {((formData.knowledgeQuality + formData.teachingMethod + formData.communicationSkills + formData.workloadFairness) / 4).toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* Кнопка отправки */}
                <div className="pt-6 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={!formData.teacherId}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center ${
                      !formData.teacherId
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg hover:scale-[1.02]'
                    }`}
                  >
                    <Send className="h-6 w-6 mr-3" />
                    Отправить оценку
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3">Конфиденциальность</h4>
            <p className="text-sm text-gray-600">
              Ваши ответы полностью анонимны. Преподаватели не увидят индивидуальные оценки.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3">Использование данных</h4>
            <p className="text-sm text-gray-600">
              Результаты используются для анализа и улучшения образовательного процесса.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3">Обратная связь</h4>
            <p className="text-sm text-gray-600">
              По вопросам заполнения анкеты обращайтесь в учебный отдел вашего института.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;

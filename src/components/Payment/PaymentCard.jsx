import React from 'react';
import { CreditCard, TrendingUp, CheckCircle } from '../Icons';

const PaymentCard = () => {
  const paymentData = {
    paidAmount: '126 670.00 ₽',
    totalAmount: '253 340.00 ₽',
    semester5Progress: 100,
    semester6Progress: 50,
    nextPaymentDate: '15.10.2025',
    nextPaymentAmount: '63 335.00 ₽'
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
      <div className="lg:px-8 px-6 py-6">
        <div className="flex flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">Оплата обучения</h3>
            <p className="text-gray-600 mt-1">Статус платежей и задолженностей</p>
          </div>
          <a href="/services/contracts/" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
            К договорам →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6 mb-8">
          <div className="rounded-xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="mr-4 flex-shrink-0">
                <div className="h-14 w-14 rounded-full flex items-center justify-center">
                  <CreditCard className="h-7 w-7 text-green-700" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">{paymentData.paidAmount}</h4>
                <p className="font-medium text-gray-600">Оплачено</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              из {paymentData.totalAmount} за учебный год
            </div>
          </div>
          
          <div className="rounded-xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="mr-4 flex-shrink-0">
                <div className="h-14 w-14 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-blue-700" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{paymentData.nextPaymentAmount}</h4>
                <p className="font-medium text-gray-600">Следующий платеж</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              до {paymentData.nextPaymentDate}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-900">5 семестр</span>
              <span className="font-bold text-green-700">{paymentData.semester5Progress}%</span>
            </div>
            <div className="w-full bg-green-100 rounded-full h-3">
              <div 
                className="bg-green-600 h-3 rounded-full" 
                style={{ width: `${paymentData.semester5Progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Оплачено полностью</span>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-900">6 семестр</span>
              <span className="font-bold text-blue-700">{paymentData.semester6Progress}%</span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full" 
                style={{ width: `${paymentData.semester6Progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Осталось оплатить: 63 335.00 ₽</span>
              <span className="text-sm font-bold text-blue-700">В процессе</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Статус оплаты: <span className="font-bold text-green-700">Частично оплачено</span>
            </div>
            <a href="/services/payment/" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              История платежей →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
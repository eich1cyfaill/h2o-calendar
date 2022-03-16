import React from 'react';
import { Form } from 'react-bootstrap';
import cl from '../../../Styles/CalendarSettings.module.sass'

const CalendarSettings = (props: any) => {
    return (
        <div className={cl.root}>
            <section className={cl.calendarSettings__mini}>
                <div className={cl.calendarSettings__mini_date}>
                    <i className="fa-solid fa-angles-left" onClick={() => props.prevMonth()}></i>
                    <i className="fa-solid fa-angle-left" onClick={() => props.prevMonth()}></i>
                    <div>{props.month}</div>
                    <i className="fa-solid fa-angle-right" onClick={() => props.nextMonth()}></i>
                    <i className="fa-solid fa-angles-right" onClick={() => props.nextMonth()}></i>
                </div>
                <div className={cl.calendarSettings__mini_headings}>
                    <ul>
                        <li>Пн</li>
                        <li>Вт</li>
                        <li>Ср</li>
                        <li>Чт</li>
                        <li>Пт</li>
                        <li>Сб</li>
                        <li>Вс</li>
                    </ul>
                    <div className={cl.calendarSettings__mini_table}>
                        {props.days?.map((el: number) =>
                            <div key={Math.random()} className={cl.calendarSettings__mini_tableItem}>
                                <div>{el}</div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className={cl.calendarSettings__typeEvent}>
                <h3>Тип события</h3>
                <div className={cl.calendarSettings__dropdownFamily}>
                    <Form.Select name="65r4" id="" className="selectpicker">
                        <option value="" selected disabled>Выбрать подразделение</option>
                    </Form.Select>
                    <br/>
                    <Form.Select name="" id="" className="selectpicker">
                        <option value="" selected disabled>Выбрать сотрудника</option>
                    </Form.Select>
                    <br/>
                    <Form.Select name="" id="" className="selectpicker">
                        <option value="" selected disabled>Выбрать тип уборки</option>
                    </Form.Select>
                </div>
            </section>
            <section >
                <h3>Задачи</h3>
                <div className={cl.calendarSettings__taskFamily}>
                    <div className={`${cl.calendarSettings__taskFamily_item} ${cl.task}`}>
                        <i className="fa-regular fa-circle-dot"></i> Заявка
                    </div>
                    <div className={`${cl.calendarSettings__taskFamily_item} ${cl.sell}`}>
                        <i className="fa-solid fa-layer-group"></i> Продажа</div>
                    <div className={`${cl.calendarSettings__taskFamily_item} ${cl.cleaningTask}`}>
                        <i className="fa-solid fa-hourglass-empty"></i> Запуск уборки
                    </div>
                    <div className={`${cl.calendarSettings__taskFamily_item} ${cl.reports}`}><i className="fa-regular fa-message"></i> Отчеты</div>
                    <div className={`${cl.calendarSettings__taskFamily_item} ${cl.control}`}><i className="fa-solid fa-phone"></i> Контроль качества</div>
                </div>
            </section>
            <section>
                <h3>Уборки</h3>
                <div className={cl.calendarSettings__cleaningFamily}>
                    <div className={`${cl.calendarSettings__cleaningFamily_item} ${cl.cleaning}`}><i className="fa-solid fa-droplet"></i> Уборка</div>
                    <div className={`${cl.calendarSettings__cleaningFamily_item} ${cl.remakes}`}><i className="fa-solid fa-rotate-right"></i> Переделка</div>
                    <div className={`${cl.calendarSettings__cleaningFamily_item} ${cl.freeDays}`}><i className="fa-solid fa-layer-group"></i> Свободная дата</div>
                </div>
            </section>
        </div>
    );
};

export default CalendarSettings;
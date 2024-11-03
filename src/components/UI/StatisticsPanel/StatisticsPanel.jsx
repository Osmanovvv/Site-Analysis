import React from 'react'
import classes from './_statisticsPanel.module.scss';
import Btn from '../buttons/btn';

const StatisticsPanel = () => {
  return (
    <div className={classes.statistics}>
      <h2 className={classes.statistics__title}>Статистика сайта</h2>
      <ul className={classes.statistics__items}>
        <li className={classes.statistics__item}>
        <Btn>Посещения</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Средняя<br /> длительность сеанса</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Показатель<br /> отказов</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Источники<br /> трафика</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Популярные<br /> страницы</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Демографические данные<br /> пользователей</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Конверсии</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Средняя стоимость<br /> за клик</Btn>
        </li>
        <li className={classes.statistics__item}>
        <Btn>Время загрузки<br /> страниц</Btn>
        </li>
      </ul>
    </div>
  )
}

export default StatisticsPanel
import React, {useState} from 'react';
import PulseIcon from '@components/PulseIcon';

function Questions(props) {
	const [questionList, setQuestionList] = useState([
		{icon: 'box_roket', title: 'Что такое качественный проект?', text: 'Для нас это - решение Вашей задачи, которое будет привлекательно выглядеть и технически работать с учетом всех требований. Приятная графика привлекает пользователей, а техническая часть приложения удерживает их. Чем больше времени пользователи проводят в Вашем приложении, тем больше рекламы они смотрят и больше покупок оформляют.',},
		{icon: 'time_bomb', title: 'Почему фрилансеры часто затягивают сроки?', text: 'Как показывает практика - один человек не может конкурировать в качестве со сплаченной командой специалистов. Причины довольно просты - наша команда имеет многолетний опыт и сотни успешно завершенных проектов, грамотно выстроенную структуру взаимодействия между отделами и заказчиками на всех этапах. Это позволяет делать невозможное - быстро и качественно создавать продукт, который будет выглядеть и работать именно так, как Вы хотели.',},
		{icon: 'table_option', title: 'Как увеличить доход и на что обратить внимание?', text: 'Оптимизация рекламных блоков - один из наиболее важных моментов в монетизации в целом. Наши специалисты поднимут частоту показов рекламы, вместе с уровнем Вашего дохода.',},
	]);



  return (<>
    <div className="Questions">
			<div className="container">
				<h2 className="title _sec" data-size='5' data-aos='fade-up'>Знаем все подводные камни профессиональной разработки, современные тренды и тенденции</h2>
				<ul className="Questions__list">
					{questionList.map((el, i) => (
						<li className="Questions__item" key={i}>
							<div className="_icon"><PulseIcon icon={el.icon}/></div>
							<h3 className="title" data-size='3' data-aos='fade-up'>{el.title}</h3>
							<p className="text" data-size='1'>{el.text}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
  </>);
}

export default Questions;
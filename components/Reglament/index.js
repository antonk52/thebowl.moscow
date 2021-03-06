import React from 'react';
import styled from 'reshadow';
import Modal from '../Modal';

import Section from '../Section';

import styles from './style.css';

const Reglament = () => {
    const [isModalOpen, setOpen] = React.useState(false);
    return styled(styles)(
        <Section title={
            <openReglament as="button" onClick={() => setOpen(true)}>Посмотреть Регламент</openReglament>
        }>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setOpen(false)}
                closeLabel="Закрыть регламент"
            >
                <h3>Регламент открытого турнира по уличным видам спорта «THE BOWL 5».</h3>

                <p>Виды спорта: скейтбординг и BMX.</p>

                <h4>Правила участия и регистрации в дисциплине «Скейтбординг парк»</h4>
                <p>Регистрация участников проходит с 10:30 до 12:30. Для регистрации в соревнованиях необходимо предоставить свои полные паспортные данные и заполнить заявление. Участники младше 18 лет НЕ ДОПУСКАЮТСЯ к регистрации без письменного разрешения от родителей и наличия ЗАЩИТНОГО ШЛЕМА.<br />Оргкомитет оставляет за собой право отказать в регистрации, если участник не соответствует уровню соревнований. В целях безопасности мы рекомендуем совершеннолетним участникам носить защиту и шлемы.</p>

                <h4>Правила участия и регистрации в дисциплине “Парк (BMX)”</h4>
                <p>Регистрация закрытая, участвуют только приглашенные атлеты. В целях безопасности мы рекомендуем участникам носить защиту и шлемы.</p>

                <h4>Квалификация</h4>
                <p>10 приглашенных участников. Делятся на две группы по 5 человек, 2 попытки по 45 секунд.</p>

                <h4>Финал</h4>
                <p>В финал проходит 4 человека, 2 попытки по 45 секунд.</p>

                <h4>Система судейства</h4>
                <p>Судейство соревнований в двух дисциплинах обеспечивается 3 судьями, включая Главного судью соревнований. Судьи выставляют оценки в протоколе в письменном виде по 10 балльной шкале. Из 3 оценок формируется математический средний балл. Официальные результаты утверждаются главным судьей на основе письменных протоколов.</p>

                <ul>
                    <li>исполнение и сложность дорожки и трюков (амплитуда, техничность и продолжительность скольжения)</li>
                    <li>разнообразность трюков в дорожке</li>
                    <li>креативность и правильное использования боула</li>
                    <li>скорость, стиль и «флоу»</li>
                </ul>

                <h4>STREET CASH JAM на 3-х фигурах парка.</h4>
                <p>За лучшие трюки по мнению судей райдеры будут награждаться кэшем, джем без призовых мест, участвуют все желающие!</p>

                <h3>Правила в дисциплине «скейтбординг парк»</h3>

                <p>Квалификация - участники соревнуются группами по 6 человек, у каждого участника будет 4 попытки, длинной 40 секунд или до падения. Если участник ошибается на первом трюке, можно начать заново ОДИН раз.</p>
                <p>У каждой группы будет 5 минутная раскатка. В финал проходят первые 4 участника.</p>

                <p>Финал - 4 приглашенных участника + 4 лучших по итогам квалификации.</p>

                <p>Участники соревнуются в 1 группе, у каждого будет 4 попытки длинной по 40 секунд или до падения. Если участник ошибается на первом трюке, можно начать заново ОДИН раз.</p>

                <p>Соревнования в дисциплине «скейтбординг стрит» на лучший трюк.</p>
                <p>К участию допускается любой желающий. Во время соревнований на лучший трюк судьи оценивают отдельные трюки, сделанные участниками  на  одной из обозначенных фигур и выбирают лучший по их мнению трюк.</p>

            </Modal>
        </Section>
    );
};

export default Reglament;

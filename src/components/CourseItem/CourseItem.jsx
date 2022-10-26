import React from "react";
import { Link } from "react-router-dom";

const CourseItem = (props) => {
  return (
    <div className="course-item">
      <img src="https://picsum.photos/200/" className="course-item-img" />
      <p> Название:  {props.name} </p>
      <p> Продолжительность: {props.duration} м. </p>
      <p> Статус: {props.status ? 'Важный' : 'Неважный'} </p>
      <p> Дата публикации: {new Date(props.created_at).toString()} </p>
      <button onClick={props.changeImportance}>Сделать {props.status ? 'неважным' : 'важным'} </button>
      <button onClick={props.deletePost}>Удалить пост</button>
      <Link to={`/post/${props.id}`}>Подробнее</Link>
    </div>
  );
};

export default CourseItem;
import React from 'react';

export default function Work(props) {
    // eslint-disable-next-line
    const { item } = props;

    return (
        <article>
            <h3>{props.item.title}</h3>
            <p>Mission : {props.item.tasks}</p>
            <p>Technologies utilisées : {props.item.techs} </p>
        </article>
    )
}
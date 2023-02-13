import React from 'react'

type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    // 8 - ennum
    category: Category
}
export enum Category{
    JS = "Javascript",
    TS = "Typescript",
    PY = "Python",
}

const Destructiring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQty}</p>
        <div>
            {tags.map(tag =>(
                <span>#{tag}</span>
            ))}
            <h4>Categoria: {category}</h4>
        </div>
      </div>
  )
}

export default Destructiring
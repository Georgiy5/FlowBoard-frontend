import cn from 'classnames'
import styles from './BoardCard.module.css'
import type { BoardCardProps } from './types'
import React, { useState } from 'react';
import { useDeleteBoardMutation } from '@/entities/api';
import { useAddFavoritesMutation, useCheckIsFavoriteQuery, useDeleteFavoriteMutation } from '@/entities/api/favorites.endpoints';
import { hydrateRoot } from 'react-dom/client';

export default function BoardCard ({title, onClick, id, count} : BoardCardProps) {

    const [color] = useState(() => 
        `hsl(${Math.random() * 360}, 70%, 80%)` // Случайный оттенок, 70% насыщенности, 80% светлоты
    );

    const [deleteBoard] = useDeleteBoardMutation()

    const deleteFunc = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if (count > 0) {
            console.log('nelzya')
            return
        }
        deleteBoard(id)
    }

    let word = ''

    switch (count) {
        case 1:
            word = 'колонка'
            break
        case 2:
            word = 'колонки'
            break
        case 3:
            word = 'колонки'
            break
        case 4:
            word = 'колонки'
            break
        default:
            word = 'колонок'

    }

    const { data } = useCheckIsFavoriteQuery(id)
    const [addFavorite] = useAddFavoritesMutation()
    const [deleteFavorite] = useDeleteFavoriteMutation()
    const isFavorite = data?.isFavorite

    return (
        <div onClick={onClick} className={cn(styles['card'])}>
            <div className={cn(styles['header'])}>
                <div style={{backgroundColor: color}} className={cn(styles['cube'])}>
                    <img src="/cube.svg" className={cn(styles['cubeSvg'])}/>
                </div>
                <p className={styles.title}>{title}</p>
                <button onClick={deleteFunc} className={styles.dots}><img className={styles.dotsSVG} src="/bucket.svg"/></button>
            </div>
            <div className={styles.countContainer}>
                <button 
                    className={styles.likeButton}
                    onClick={(e: React.MouseEvent) => {
                        e.stopPropagation()
                        isFavorite ? deleteFavorite(id) : addFavorite(id)
                    }}
                >
                    <img src={isFavorite ? 'heartLiked.svg' : 'heart.svg'} className={styles.likeSVG}/>
                </button>
                <p className={styles.count}>{count} {word}</p>
            </div>
        </div>
    )
}
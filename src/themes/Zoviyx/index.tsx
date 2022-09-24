import React from 'react';
import { Theme } from '../interface';

import bieji from './sounds/别急.mp3';
import hamood from './sounds/哈姆！.mp3';
import haoye from './sounds/好耶.mp3';
import shabi from './sounds/你这个沙比.mp3';
import CNM from './sounds/CNM.mp3';
import lai from './sounds/来来来.mp3'
import jibai from './sounds/鸡掰.mp3';

type SoundNames =
    | '哈姆！'
    | '好耶'
    | '别急'
    | '你这个沙比'
    | 'CNM'
    | '鸡掰'
    | '来来来'

const pictureSoundMap: Record<string, SoundNames> = {
    ['尖下巴小Z']: '哈姆！',//前面为图片名，后面为音乐名
    ['简笔画小Z']: '你这个沙比',
    ['龙形态Z宝']: 'CNM',
    ['迷惑小Z']: '哈姆！',
    ['小Z']: '别急',
    ['耍酷小Z']: 'CNM',
    ['帅气小Z']: '来来来',
    ['提刀小Z']: '你这个沙比',
    ['音游小Z']: '来来来',
    ['摸牌摸牌']: '鸡掰',
};

const sounds: { name: SoundNames; src: string }[] = [
    { name: '别急', src: bieji },
    { name: '好耶', src: haoye },
    { name: '哈姆！', src: hamood },
    { name: '你这个沙比', src: shabi },
    { name: 'CNM', src: CNM },
    { name: '鸡掰', src: jibai },
    { name: '来来来', src: lai },
];

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

const icons = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const ZoviyxTheme: Theme<SoundNames> = {
    name: 'Zoviyx',
    icons: icons.map(({ name, content }) => ({
        name,
        content,
        clickSound: pictureSoundMap[name],
        tripleSound: '好耶',//三消音乐
    })),
    sounds,
};

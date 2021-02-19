import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Picture } from '../types/picture';
import { Store } from '../types/store';

export const getPicture = (pictures: Array<Picture>) => {
    if (!_.isNull(pictures) && !_.isEmpty(pictures)) {
        const index = _.random(0, pictures.length - 1);
        return pictures[index].src.medium;
    }

    return '';
};

export const getPicturesFromState = () => {
    const state = useSelector((localState: Store) => localState.pictures);
    return getPicture(state.pictures);
};

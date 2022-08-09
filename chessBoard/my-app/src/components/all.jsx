import Board from './board';
import ReverseBoard from './boardReverse';

const All = () => {
    let arr = [], i = 0;
    while (i < 10) {
        arr.push(i);
        i++;
    }
    return(
        <div>{arr.map(a => a % 2 === 0 ? <Board /> : <ReverseBoard />)}</div>
    )
}

export default All;
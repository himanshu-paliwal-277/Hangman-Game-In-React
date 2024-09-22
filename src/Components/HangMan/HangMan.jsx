import level1 from '../../assets/Images/Hangman3d/1.png';
import level2 from '../../assets/Images/Hangman3d/2.png';
import level3 from '../../assets/Images/Hangman3d/3.png';
import level4 from '../../assets/Images/Hangman3d/4.png';
import level5 from '../../assets/Images/Hangman3d/5.png';
import level6 from '../../assets/Images/Hangman3d/6.png';
import level7 from '../../assets/Images/Hangman3d/7.png';
import level8 from '../../assets/Images/Hangman3d/8.png';

function HangMan({ step }) {
    const images = [level1, level2, level3, level4, level5, level6, level7, level8];

    return (
        <div className='w-[350px] h-[350px]'>
            <img src={step >= images.length ? images[images.length - 1] : images[step]} alt="hangman image" />
        </div>
    )
}

export default HangMan;
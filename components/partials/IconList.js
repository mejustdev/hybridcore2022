import { imageBuilder } from '../../lib/sanity';
// Use width height or className to control the image size
const IconList = ({ icon, stil, width = 70, height = 70 }) => {
  const imgUrl =
    icon &&
    imageBuilder(icon)
      // .width(width)
      // .height(Math.floor((9 / 16) * width))
      .fit('crop')
      .auto('format')
      .url();

  return imgUrl ? (
    <span className={stil}>
      <img
        className='mx-auto rounded'
        src={imgUrl}
        alt={icon.alt || ''}
        width={width}
        height={height}
      />
    </span>
  ) : (
    <></>
  );
};

export default IconList;

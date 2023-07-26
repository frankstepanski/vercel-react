import styles from "./BouncingDotsLoader.module.css";

/*
    There are lots of "loading" image or loading "content" libraries.

     - For just animated image, you can use this one:
       https://www.npmjs.com/package/react-spinner

    - For "content" loading animation, you can use this one:
      https://www.npmjs.com/package/react-content-loader

      OR create your own:
      https://www.freecodecamp.org/news/how-to-use-css-to-create-a-beautiful-loading-animation-for-your-app/

      This component is an example of just a loading animation image or effect.
      But it's not perfect and you won't see it unless a lot of data is being loaded.
*/

const BouncingDotsLoader = () => {
    return (
      <>
        <div className={styles.bouncingLoader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
};

export default BouncingDotsLoader;
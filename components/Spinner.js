export default () => (
  <div className='loaderDiv'>
    <div className="loader" /> 
    <style jsx>{`
      .loader {
        margin: 25% auto;
        border: 10px solid #A0A0A0;
        border-radius: 50%;
        border-top: 10px solid #0a71ab;
        width: 100px;
        height: 100px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
      }

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)


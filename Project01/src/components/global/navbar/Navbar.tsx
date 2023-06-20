import { redirect } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="navbar position-absolute w-100 sticky-top navbar-expand-sm navbar-light bg-default">
      <div className="container">
        <a className="navbar-brand" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="70px" viewBox="0 0 424.75 133.9">
            <title>PetTop-logo</title>
            <g id="Camada_1" data-name="Camada 1">
              <path className="cls-1"
                d="M746.46,500.69c-.08.93-.23,1.9-.23,2.87q0,23.48.11,46.94c.06,16.65.24,33.29.14,49.94,0,4,1.21,5.82,5.41,5.53a59.16,59.16,0,0,1,10.48.14c4,.44,4.79-1.3,4.71-4.84-.22-9.32,0-18.65-.24-28-.09-3.53,1.16-4.59,4.6-4.6,6.65,0,13.32-.21,19.94-.8,18-1.61,29.66-14,30.22-31.81.6-19.63-9.24-33.29-27.8-35.1C778.35,499.5,762.62,500.69,746.46,500.69Zm366.78,102.88c2.14.59,3.55.88,4.89,1.37,20.68,7.52,43.71-3.33,50.71-23.9,7.11-20.91-4.07-42.88-25.36-49.84-22.5-7.35-47.57,7.47-49.6,31-1.77,20.5-.87,41.24-1,61.88,0,1,.69,2.55,1.44,2.83,6,2.22,12.07,4.18,19,6.51ZM897.77,577.85c4.46-28.63-16.1-50.62-43.26-47.19-15.42,2-28.85,14.47-31.94,29.76a38.41,38.41,0,0,0,17.94,40.28c13.83,8.23,32.58,6.94,44.12-2.88,2.42-2.06,2.41-3.63.18-5.65-2.84-2.57-5.66-5.17-8.34-7.91-1.89-1.93-3.34-1.81-5.55-.26-6.48,4.53-13.5,4.51-20.31.91-2.53-1.33-4.46-3.81-6.66-5.76l.78-1.3Zm70.6-15h.16c0,13,.13,26-.09,39-.06,3.67,1.33,4.72,4.64,4.62a95.74,95.74,0,0,1,11,.07c4.45.37,6.07-1,6-5.81-.24-25.32,0-50.64-.17-76,0-3.73,1.11-5,4.82-4.92,6.48.22,13-.13,19.47.18,3.94.19,5.49-1.14,5.33-5s0-7.67.13-11.49c.12-2.83-1.14-3.83-3.87-3.83-24.32,0-48.64-.17-73-.05-1.2,0-3.29,2.07-3.42,3.34-.41,4.12.09,8.32-.13,12.47-.18,3.5,1.07,4.78,4.59,4.63,6.48-.26,13,0,19.47-.32,3.92-.17,5.2,1.16,5.12,5.16C968.22,537.51,968.37,550.18,968.37,562.84Zm-43-57.15c-6.55,2.23-12.13,3.89-17.47,6.13-1.31.55-2.54,3-2.55,4.64-.14,16.83-.34,33.67.1,50.49.55,20.45,16.7,37.54,37.14,40.25,3.25.43,4.71-.35,4.61-3.77-.11-3.83-.15-7.68.06-11.5.16-3.09-1-4.26-4.1-4.87-11.1-2.18-17.52-10.08-17.86-21.47-.08-2.67,0-5.34,0-8,.19-9.85-1.14-8.55,8.45-8.55,13.69,0,13.5.06,13.67-13.53.06-4.57-1.54-5.75-5.81-5.47-5.22.35-10.49.09-16.28.09Z"
                transform="translate(-746.23 -499.53)" />
              <path
                d="M746.46,500.69c16.16,0,31.89-1.19,47.34.31,18.56,1.81,28.4,15.47,27.8,35.1-.56,17.82-12.19,30.2-30.22,31.81-6.62.59-13.29.79-19.94.8-3.44,0-4.69,1.07-4.6,4.6.23,9.31,0,18.64.24,28,.08,3.54-.72,5.28-4.71,4.84a59.16,59.16,0,0,0-10.48-.14c-4.2.29-5.44-1.48-5.41-5.53.1-16.65-.08-33.29-.14-49.94q-.08-23.46-.11-46.94C746.23,502.59,746.38,501.62,746.46,500.69ZM767,533.84h-.06c0,4-.19,8,.11,11.94.09,1.18,1.57,3.22,2.42,3.22,6.78,0,13.67.31,20.31-.8,7.49-1.24,10.88-7,10.46-15.18-.38-7.53-4.28-12.18-11.84-13a142.8,142.8,0,0,0-18.39-.47c-1,0-2.73,2.08-2.87,3.33A102.26,102.26,0,0,0,767,533.84Z"
                transform="translate(-746.23 -499.53)" />
              <path
                d="M1113.24,603.57v29.86c-6.89-2.33-13-4.29-19-6.51-.75-.28-1.45-1.86-1.44-2.83.17-20.64-.73-41.38,1-61.88,2-23.54,27.1-38.36,49.6-31,21.29,7,32.47,28.93,25.36,49.84-7,20.57-30,31.42-50.71,23.9C1116.79,604.45,1115.38,604.16,1113.24,603.57Zm37.39-34.48a18.78,18.78,0,0,0-18.2-19.31c-10-.28-18.88,7.9-19.29,17.82-.41,9.72,8.11,18.94,17.8,19.25A18.75,18.75,0,0,0,1150.63,569.09Z"
                transform="translate(-746.23 -499.53)" />
              <path
                d="M897.77,577.85h-53l-.78,1.3c2.2,2,4.13,4.43,6.66,5.76,6.81,3.6,13.83,3.62,20.31-.91,2.21-1.55,3.66-1.67,5.55.26,2.68,2.74,5.5,5.34,8.34,7.91,2.23,2,2.24,3.59-.18,5.65-11.54,9.82-30.29,11.11-44.12,2.88a38.41,38.41,0,0,1-17.94-40.28c3.09-15.29,16.52-27.8,31.94-29.76C881.67,527.23,902.23,549.22,897.77,577.85Zm-53.06-19.28h31c-2.53-5.91-9.17-9.47-16.42-9.13S846.55,553.11,844.71,558.57Z"
                transform="translate(-746.23 -499.53)" />
              <path
                d="M968.37,562.84c0-12.66-.15-25.33.09-38,.08-4-1.2-5.33-5.12-5.16-6.48.29-13,.06-19.47.32-3.52.15-4.77-1.13-4.59-4.63.22-4.15-.28-8.35.13-12.47.13-1.27,2.22-3.33,3.42-3.34,24.32-.12,48.64,0,73,.05,2.73,0,4,1,3.87,3.83-.16,3.82-.28,7.66-.13,11.49s-1.39,5.24-5.33,5c-6.48-.31-13,0-19.47-.18-3.71-.13-4.84,1.19-4.82,4.92.14,25.32-.07,50.64.17,76,0,4.83-1.57,6.18-6,5.81a95.74,95.74,0,0,0-11-.07c-3.31.1-4.7-1-4.64-4.62.22-13,.09-26,.09-39Z"
                transform="translate(-746.23 -499.53)" />
              <path
                d="M925.42,505.69v24.44c5.79,0,11.06.26,16.28-.09,4.27-.28,5.87.9,5.81,5.47-.17,13.59,0,13.53-13.67,13.53-9.59,0-8.26-1.3-8.45,8.55,0,2.66-.12,5.33,0,8,.34,11.39,6.76,19.29,17.86,21.47,3.12.61,4.26,1.78,4.1,4.87-.21,3.82-.17,7.67-.06,11.5.1,3.42-1.36,4.2-4.61,3.77-20.44-2.71-36.59-19.8-37.14-40.25-.44-16.82-.24-33.66-.1-50.49,0-1.6,1.24-4.09,2.55-4.64C913.29,509.58,918.87,507.92,925.42,505.69Z"
                transform="translate(-746.23 -499.53)" />
            </g>
            <g id="Camada_2" data-name="Camada 2">
              <path className="cls-2"
                d="M1068.23,599.33c0,4.73-2.86,8.41-7.68,9.74a18,18,0,0,1-8.48.19c-3.49-.68-7-1.15-10.55-1.65a80.71,80.71,0,0,0-10.76-.73,18.23,18.23,0,0,1-8.36-2,11,11,0,0,1-6.18-8.75,11.94,11.94,0,0,1,6.89-12.57c.42-.18.82-.4,1.24-.57a21.55,21.55,0,0,0,8.35-6.18c1.71-2,3.35-4,5.07-5.93a9.26,9.26,0,0,1,5.62-3.14,6.85,6.85,0,0,1,5.63,1.59,16.46,16.46,0,0,1,3.91,4.67,74.87,74.87,0,0,0,6.27,10c1.6,2,3.34,4,5.13,5.86a14.46,14.46,0,0,1,3.88,8.39,1.94,1.94,0,0,1,0,.24C1068.24,598.77,1068.23,599.05,1068.23,599.33Z"
                transform="translate(-746.23 -499.53)" />
              <path className="cls-2"
                d="M1067.8,549.79a20.81,20.81,0,0,1-6.85,15.14,9.52,9.52,0,0,1-4.2,2.32c-3.11.74-5.69-.66-7-3.79a12.43,12.43,0,0,1-.75-5.88,20.89,20.89,0,0,1,6.07-13.21,10.51,10.51,0,0,1,5.08-3,5.57,5.57,0,0,1,6.49,3.17A11.8,11.8,0,0,1,1067.8,549.79Z"
                transform="translate(-746.23 -499.53)" />
              <path className="cls-2"
                d="M1027.25,568.39a12.45,12.45,0,0,1-1.11,5.58,5.82,5.82,0,0,1-4.32,3.56,6.8,6.8,0,0,1-4.85-1.16,15.44,15.44,0,0,1-5.06-5.44,21.07,21.07,0,0,1-3-9.3,13.37,13.37,0,0,1,1-6.72c.94-2,2.36-3.52,4.69-3.79a7.12,7.12,0,0,1,5,1.46,16,16,0,0,1,4.75,5.35A21.62,21.62,0,0,1,1027.25,568.39Z"
                transform="translate(-746.23 -499.53)" />
              <path className="cls-2"
                d="M1028.34,551.38a17,17,0,0,1,2.46-9.19,9.52,9.52,0,0,1,2-2.21,5.4,5.4,0,0,1,6.92-.09,10.9,10.9,0,0,1,3.51,4.45,20.52,20.52,0,0,1,.67,16.15,9.83,9.83,0,0,1-3,4.35,5.56,5.56,0,0,1-6.87.29,12,12,0,0,1-4.24-5.74A21.39,21.39,0,0,1,1028.34,551.38Z"
                transform="translate(-746.23 -499.53)" />
              <path className="cls-2"
                d="M1083.54,566.17a19.74,19.74,0,0,1-4.09,11.13,16.74,16.74,0,0,1-6.84,5.72,7.2,7.2,0,0,1-4.87.58c-2.44-.65-3.66-2.43-4.2-4.76a13,13,0,0,1,.4-6.73,20.51,20.51,0,0,1,8.14-11.48,9.53,9.53,0,0,1,5.37-1.9,5.44,5.44,0,0,1,5.51,3.82A10.85,10.85,0,0,1,1083.54,566.17Z"
                transform="translate(-746.23 -499.53)" />
            </g>
          </svg>
        </a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">Home<span
                className="visually-hidden">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicos">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">Sobre nós!</a>
            </li>
            <li className="nav-item dropdown visually-hidden">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">User</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="./userProfile.html">Meu Perfil</a>
                <a className="dropdown-item" href="./petProfile.html">Meus PETs</a>
                <a className="dropdown-item fw-bold" onClick={() => redirect("/home")} href="#">Sair</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary rounded text-white fw-bold" href="./login.html">Login</a>
            </li>
            <li className="nav-item px-2">
              <a className="btn btn-outline-dark rounded fw-bold"
                href="./signup.html">Cadastre-se</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

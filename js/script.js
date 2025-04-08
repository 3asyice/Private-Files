var x = document.getElementById('div__gabriel');
var y = false;
var f = document.getElementsByTagName('footer')[0];

function fotosGabriel() {
  y = !y;
  x.style.display = y ? 'block' : 'none';
  var p = f.getElementsByTagName('p')[0];
  p.style.display = 'none';
}
var vg = document.getElementById('videos_gabriel');
var fav = false;
var fv = document.getElementsByTagName('footer')[0];

function videosGabriel() {
  fav = !fav;
  vg.style.display = fav ? 'block' : 'none';
  var pv = fv.getElementsByTagName('p')[0];
  pv.style.display = 'none';
}

var fotosgabriel = document.getElementById('fotos_gabriel');

function authjose() {
  const sF = document.getElementById('ss').value;
  const uF = document.getElementById('uu').value;
  if (sF === 'José' && uF === '2003-02-22') {
    fotosgabriel.style.display = 'block';
  } else {
    alert("acesso negado");
    x.style.display = 'none';
  }
}

var auth_braga = document.getElementById('camila_div');
var footer_auth = document.getElementsByTagName('footer')[0];
var braga = false;


function camila_div() {
  braga = !braga;
  auth_braga.style.display = braga ? 'block' : 'none';
  
  var prGr = footer_auth.getElementsByTagName('p')[0];
  prGr.style.display = 'none';
}



var camVds = document.getElementById('camila_id');
var vd_camila = false;
var footer_Auth = document.getElementsByTagName('footer')[0];

function camila_auth_videos() {
  vd_camila = !vd_camila;
  camVds.style.display = vd_camila ? 'block' : 'none';
  var pRgr = footer_Auth.getElementsByTagName('p')[0];
  pRgr.style.display = 'none';
}

var videos_camilete = document.getElementById('allvideos_camila');

function camSbm() {
  const frNm = document.getElementById('swd').value; // Nome
  const dtBr = document.getElementById('usd').value; // Data de nascimento
  if (frNm === 'Camila' && dtBr === '1991-11-10') {
    videos_camilete.style.display = 'block';
  } else {
    alert("Acesso negado");
    camVds.style.display = 'none'; // Fechar o elemento se o acesso for negado
  }
}
var vi_ga = document.getElementById('videos_Gabriel');

function videosauthGabriel() {
  const sa = document.getElementById('sA').value;
  const ua = document.getElementById('uA').value;
  if (sa === 'José' && ua === '2003-02-22') {
    vi_ga.style.display = 'block';
  } else {
    alert("acesso negado");
    vg.style.display = 'none';
  }
}

var fotos_camilete = document.getElementById('fotos_camila');

function camila_fotosAuth() {
  const sb = document.getElementById('sB').value;
  const ub = document.getElementById('uB').value;
  if (sb === 'Camila' && ub === '1991-11-10') {
    fotos_camilete.style.display = 'block';
  } else {
    alert("acesso negado");
    auth_braga.style.display = 'none';
  }
}




function goBack() {
  // Seleciona todos os vídeos na página
  const videos = document.getElementsByTagName('video');
  // Oculta elementos, se eles estiverem definidos
  if (allvideos_camila) allvideos_camila.style.display = 'none';
  if (camVds) camVds.style.display = 'none';
  if (fotosgabriel) fotosgabriel.style.display = 'none';
  if (fotos_camilete) fotos_camilete.style.display = 'none';
  if (auth_braga) auth_braga.style.display = 'none';
  if (x) x.style.display = 'none';
  if (vg) vg.style.display = 'none';
  if (vi_ga) vi_ga.style.display = 'none';
  
  // Pausa todos os vídeos
  for (let i = 0; i < videos.length; i++) {
    videos[i].pause();
  }
}



// imagem
function openFullscreen(img) {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.zIndex = '9999';
  
  const fullscreenImg = document.createElement('img');
  fullscreenImg.src = img.src;
  fullscreenImg.style.maxWidth = '95%';
  fullscreenImg.style.maxHeight = '90%';
  fullscreenImg.style.border = '2px solid #E1D5C7';
  fullscreenImg.style.objectFit = 'contain';
  
  const viewFullscreenButton = document.createElement('span');
  viewFullscreenButton.className = 'material-symbols-outlined';
  viewFullscreenButton.innerText = 'fullscreen';
  viewFullscreenButton.style.position = 'absolute';
  viewFullscreenButton.style.top = '20px';
  viewFullscreenButton.style.right = '100px'; // Posição à esquerda do botão de compartilhar
  viewFullscreenButton.style.padding = '10px';
  viewFullscreenButton.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Fundo semi-transparente
  viewFullscreenButton.style.color = '#E1D5C7';
  viewFullscreenButton.style.borderRadius = '5px';
  viewFullscreenButton.style.cursor = 'pointer';
  viewFullscreenButton.style.zIndex = '10000';
  
  viewFullscreenButton.onclick = function(e) {
    e.stopPropagation();
    if (fullscreenImg.requestFullscreen) {
      fullscreenImg.requestFullscreen();
    } else if (fullscreenImg.mozRequestFullScreen) {
      fullscreenImg.mozRequestFullScreen();
    } else if (fullscreenImg.webkitRequestFullscreen) {
      fullscreenImg.webkitRequestFullscreen();
    } else if (fullscreenImg.msRequestFullscreen) {
      fullscreenImg.msRequestFullscreen();
    }
  };
  
  const shareButton = document.createElement('span');
  shareButton.className = 'material-symbols-outlined';
  shareButton.innerText = 'share';
  shareButton.style.position = 'absolute';
  shareButton.style.top = '20px';
  shareButton.style.right = '50px';
  shareButton.style.padding = '10px';
  shareButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  shareButton.style.color = '#E1D5C7';
  shareButton.style.borderRadius = '5px';
  shareButton.style.cursor = 'pointer';
  shareButton.style.zIndex = '10000';
  
  const exitButton = document.createElement('span');
  exitButton.className = 'material-symbols-outlined';
  exitButton.innerText = 'close';
  exitButton.style.position = 'absolute';
  exitButton.style.top = '20px';
  exitButton.style.right = '10px';
  exitButton.style.padding = '10px';
  exitButton.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  exitButton.style.color = '#E1D5C7';
  exitButton.style.borderRadius = '5px';
  exitButton.style.cursor = 'pointer';
  exitButton.style.zIndex = '10000';
  exitButton.onclick = function(e) {
    e.stopPropagation();
    document.body.removeChild(container);
  };
  shareButton.onclick = function(e) {
    e.stopPropagation();
    const shareUrl = img.src;
    if (navigator.share) {
      navigator.share({
        title: 'Compartilhar Imagem',
        url: shareUrl,
      }).then(() => {
        console.log('Imagem compartilhada com sucesso!');
      }).catch((error) => {
        console.error('Erro ao compartilhar:', error);
      });
    } else {
      alert('Compartilhe este link: ' + shareUrl);
    }
  };
  
  container.appendChild(fullscreenImg);
  container.appendChild(viewFullscreenButton);
  container.appendChild(shareButton);
  container.appendChild(exitButton);
  
  document.body.appendChild(container);
  container.onclick = function() {
    document.body.removeChild(container);
  };
}

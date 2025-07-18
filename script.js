const dados = {
  milho: {
    "Folhas amareladas": {
      problema: "Deficiência de nitrogênio",
      solucao: "Aplicar adubo nitrogenado."
    },
    "Furos nas folhas": {
      problema: "Lagarta-do-cartucho",
      solucao: "Controlar com inseticidas biológicos."
    },
    "Espigas mofadas": {
      problema: "Fungos (fusarium)",
      solucao: "Armazenar corretamente e tratar sementes."
    }
  },
  soja: {
    "Manchas nas folhas": {
      problema: "Ferrugem asiática",
      solucao: "Aplicar fungicida específico."
    },
    "Crescimento lento": {
      problema: "Deficiência de nutrientes",
      solucao: "Corrigir o solo com análise e adubação."
    },
    "Folhas secas": {
      problema: "Percevejos ou falta de água",
      solucao: "Fazer manejo de pragas e irrigar corretamente."
    }
  },
  tomate: {
    "Manchas nos frutos": {
      problema: "Podridão-preta",
      solucao: "Aplicar fungicida e melhorar espaçamento."
    },
    "Folhas enroladas": {
      problema: "Viroses por mosca branca",
      solucao: "Usar telas e controle de insetos."
    },
    "Plantas murchas": {
      problema: "Fusariose",
      solucao: "Melhorar drenagem e fazer rotação de culturas."
    }
  }
};

function carregarSintomas() {
  const planta = document.getElementById("planta").value;
  const sintomas = document.getElementById("sintoma");
  const container = document.getElementById("sintomas-container");
  sintomas.innerHTML = "";
  document.getElementById("resultado").style.display = "none";

  if (planta) {
    container.style.display = "block";
    Object.keys(dados[planta]).forEach((sintoma) => {
      const option = document.createElement("option");
      option.value = sintoma;
      option.textContent = sintoma;
      sintomas.appendChild(option);
    });
  } else {
    container.style.display = "none";
  }
}

function mostrarDiagnostico() {
  const planta = document.getElementById("planta").value;
  const sintoma = document.getElementById("sintoma").value;
  const resultado = document.getElementById("resultado");

  if (planta && sintoma) {
    const diag = dados[planta][sintoma];
    resultado.innerHTML = `
      <strong>Problema:</strong> ${diag.problema}<br>
      <strong>Solução:</strong> ${diag.solucao}
    `;
    resultado.style.display = "block";
  }
}

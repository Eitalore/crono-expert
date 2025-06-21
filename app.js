// Dados do cronograma
const modulesData = [
  {
    id: 1,
    name: "Conceitos Básicos",
    description: "Fundamentos de IA para PMs, abordagem técnica",
    duration_weeks: 3,
    hours_per_week: 6,
    start_date: "01/07/2025",
    end_date: "21/07/2025",
    focus: {
      development: 30,
      automation: 20,
      data: 30,
      theory: 20
    },
    tech_english: 25,
    practical: 50,
    tools: ["Google Colab", "ChatGPT", "YETI (AI Product Manager)", "Anki (para inglês técnico)"]
  },
  {
    id: 2,
    name: "Prompt Engineering",
    description: "Técnicas avançadas de prompt, otimização e automação",
    duration_weeks: 3,
    hours_per_week: 8,
    start_date: "22/07/2025",
    end_date: "11/08/2025",
    focus: {
      development: 40,
      automation: 30,
      data: 10,
      theory: 20
    },
    tech_english: 30,
    practical: 60,
    tools: ["Claude", "GPT-4", "Anthropic Prompt Library", "System prompt templates"]
  },
  {
    id: 3,
    name: "Desenvolvimento & Automação",
    description: "Integração com APIs, ferramentas no-code, automação de workflows",
    duration_weeks: 4,
    hours_per_week: 10,
    start_date: "12/08/2025",
    end_date: "08/09/2025",
    focus: {
      development: 50,
      automation: 40,
      data: 10,
      theory: 0
    },
    tech_english: 40,
    practical: 80,
    tools: ["n8n", "Zapier", "LangChain", "Flowise", "APIs da OpenAI"]
  },
  {
    id: 4,
    name: "Fine-Tuning & Adaptação de Modelos",
    description: "Personalização de modelos, treinamento e otimização",
    duration_weeks: 3,
    hours_per_week: 8,
    start_date: "09/09/2025",
    end_date: "29/09/2025",
    focus: {
      development: 40,
      automation: 10,
      data: 40,
      theory: 10
    },
    tech_english: 35,
    practical: 60,
    tools: ["OpenAI Platform", "Hugging Face", "LLaMA-Factory", "TensorFlow/PyTorch (básico)"]
  },
  {
    id: 5,
    name: "RAG & Conhecimento Externo",
    description: "Sistemas de recuperação, bancos de dados vetoriais, integração",
    duration_weeks: 3,
    hours_per_week: 8,
    start_date: "30/09/2025",
    end_date: "20/10/2025",
    focus: {
      development: 30,
      automation: 20,
      data: 50,
      theory: 0
    },
    tech_english: 35,
    practical: 70,
    tools: ["Weaviate", "Pinecone", "MongoDB", "Neo4j", "Supabase"]
  },
  {
    id: 6,
    name: "AI Agents & Fluxos Agênticos",
    description: "n8n, automação de processos, integrações multi-agentes",
    duration_weeks: 4,
    hours_per_week: 10,
    start_date: "21/10/2025",
    end_date: "17/11/2025",
    focus: {
      development: 30,
      automation: 60,
      data: 10,
      theory: 0
    },
    tech_english: 40,
    practical: 85,
    tools: ["n8n", "LangGraph", "Flowise", "LangChain", "Make.com", "Lindy"]
  },
  {
    id: 7,
    name: "Prototipagem & Desenvolvimento",
    description: "Lovable, Bolt, ferramentas de prototipagem rápida",
    duration_weeks: 3,
    hours_per_week: 8,
    start_date: "18/11/2025",
    end_date: "08/12/2025",
    focus: {
      development: 60,
      automation: 30,
      data: 10,
      theory: 0
    },
    tech_english: 40,
    practical: 80,
    tools: ["Lovable", "Bolt", "Databutton", "Replit", "v0"]
  },
  {
    id: 8,
    name: "Modelos Fundacionais & APIs",
    description: "Integração com APIs de modelos, orquestração e uso avançado",
    duration_weeks: 2,
    hours_per_week: 6,
    start_date: "09/12/2025",
    end_date: "22/12/2025",
    focus: {
      development: 50,
      automation: 20,
      data: 30,
      theory: 0
    },
    tech_english: 45,
    practical: 70,
    tools: ["APIs Claude/GPT/Gemini", "Postman", "JavaScript básico", "Supabase", "Firebase"]
  },
  {
    id: 9,
    name: "Sistemas de Avaliação & Feedback",
    description: "Métricas, avaliação, feedback de usuários, iteração",
    duration_weeks: 2,
    hours_per_week: 6,
    start_date: "23/12/2025",
    end_date: "05/01/2026",
    focus: {
      development: 20,
      automation: 40,
      data: 40,
      theory: 0
    },
    tech_english: 30,
    practical: 75,
    tools: ["Google Analytics", "Plataformas de Feedback", "A/B Testing tools", "Metabase"]
  }
];

const weeklySchedule = {
  monday: {
    morning: "06:30-07:00: Inglês Técnico + Revisão Rápida",
    evening1: "19:30-20:30: Estudo Prático",
    evening2: "20:30-21:30: Desenvolvimento/Automação"
  },
  tuesday: {
    morning: "06:30-07:00: Inglês Técnico + Revisão Rápida", 
    evening1: "19:30-20:30: Estudo Prático",
    evening2: "20:30-21:30: Desenvolvimento/Automação"
  },
  wednesday: {
    morning: "06:30-07:00: Inglês Técnico + Revisão Rápida",
    evening1: "19:30-20:30: Estudo Prático", 
    evening2: "20:30-21:30: Desenvolvimento/Automação"
  },
  thursday: {
    morning: "06:30-07:00: Inglês Técnico + Revisão Rápida",
    evening1: "19:30-20:30: Estudo Prático",
    evening2: "20:30-21:30: Desenvolvimento/Automação"
  },
  friday: {
    morning: "06:30-07:00: Inglês Técnico + Revisão Rápida",
    evening1: "19:30-20:30: Estudo Prático",
    evening2: "20:30-21:30: Desenvolvimento/Automação"
  },
  saturday: {
    morning: "09:00-12:00: Sessão Concentrada de Prática"
  },
  sunday: {
    rest: "Descanso"
  }
};

const totals = {
  total_weeks: 27,
  total_hours: 218,
  avg_hours_per_week: 8.1
};

// Variáveis globais
let previewChart;

// Função para formatar data de DD/MM/YYYY para objeto Date
function parseDate(dateString) {
  const parts = dateString.split('/');
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

// Função para formatar data de objeto Date para DD/MM/YYYY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Função para calcular a quantidade de dias entre duas datas
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
}

// Função para obter módulo predominante (maior foco)
function getDominantFocus(module) {
  const focus = module.focus;
  const maxFocus = Math.max(focus.development, focus.automation, focus.data, focus.theory);
  
  if (maxFocus === focus.development) return 'development';
  if (maxFocus === focus.automation) return 'automation';
  if (maxFocus === focus.data) return 'data';
  if (maxFocus === focus.theory) return 'theory';
  
  return 'development';
}

// Inicializar aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando aplicação...');
  
  // Aguardar um pequeno delay para garantir que tudo foi carregado
  setTimeout(() => {
    initTabs();
    initDashboard();
    initTimeline();
    initWeeklySchedule();
    initModulesAccordion();
    initCustomize();
    initCalculator();
    console.log('Aplicação inicializada!');
  }, 100);
});

// Inicializar navegação por abas
function initTabs() {
  console.log('Inicializando tabs...');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  console.log('Tab buttons encontrados:', tabButtons.length);
  console.log('Tab contents encontrados:', tabContents.length);
  
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Tab clicada:', button.getAttribute('data-tab'));
      
      // Remover classe ativa de todas as abas
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Adicionar classe ativa na aba clicada
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      
      if (targetContent) {
        targetContent.classList.add('active');
        console.log('Tab ativada:', tabId);
      } else {
        console.error('Tab content não encontrado:', tabId);
      }
    });
  });
}

// Inicializar Dashboard
function initDashboard() {
  console.log('Inicializando dashboard...');
  
  const progressBar = document.getElementById('progress-bar');
  const currentDate = new Date('2025-06-21');
  const startDate = parseDate(modulesData[0].start_date);
  const endDate = parseDate(modulesData[modulesData.length - 1].end_date);
  
  // Simular progresso (0% já que ainda não começou)
  if (progressBar) {
    progressBar.style.width = '0%';
    progressBar.textContent = '0%';
  }
  
  // Atualizar datas no dashboard
  const startDateEl = document.getElementById('start-date');
  const endDateEl = document.getElementById('end-date');
  
  if (startDateEl) startDateEl.textContent = modulesData[0].start_date;
  if (endDateEl) endDateEl.textContent = modulesData[modulesData.length - 1].end_date;
  
  // Calcular dias restantes
  const daysRemaining = daysBetween(currentDate, startDate);
  const daysRemainingEl = document.getElementById('days-remaining');
  if (daysRemainingEl) {
    daysRemainingEl.textContent = daysRemaining > 0 ? 
      `${daysRemaining} dias até o início` : 
      `${daysBetween(currentDate, endDate)} dias até o término`;
  }
  
  // Verificar módulo atual
  let currentModule = "Não iniciado";
  if (currentDate > startDate) {
    for (let i = 0; i < modulesData.length; i++) {
      const moduleStart = parseDate(modulesData[i].start_date);
      const moduleEnd = parseDate(modulesData[i].end_date);
      
      if (currentDate >= moduleStart && currentDate <= moduleEnd) {
        currentModule = `Módulo ${modulesData[i].id}: ${modulesData[i].name}`;
        break;
      }
    }
  }
  
  const currentModuleEl = document.getElementById('current-module');
  if (currentModuleEl) currentModuleEl.textContent = currentModule;
  
  // Calcular barras de foco
  calculateFocusDistribution();
}

// Calcular e exibir distribuição de foco
function calculateFocusDistribution() {
  console.log('Calculando distribuição de foco...');
  
  let totalDev = 0;
  let totalAuto = 0;
  let totalData = 0;
  let totalTheory = 0;
  let totalEnglish = 0;
  let totalHours = 0;
  
  modulesData.forEach(module => {
    const hours = module.duration_weeks * module.hours_per_week;
    totalHours += hours;
    
    totalDev += (module.focus.development / 100) * hours;
    totalAuto += (module.focus.automation / 100) * hours;
    totalData += (module.focus.data / 100) * hours;
    totalTheory += (module.focus.theory / 100) * hours;
    totalEnglish += (module.tech_english / 100) * hours;
  });
  
  // Converter para porcentagens
  const devPercent = Math.round((totalDev / totalHours) * 100);
  const autoPercent = Math.round((totalAuto / totalHours) * 100);
  const dataPercent = Math.round((totalData / totalHours) * 100);
  const theoryPercent = Math.round((totalTheory / totalHours) * 100);
  const englishPercent = Math.round((totalEnglish / totalHours) * 100);
  
  console.log('Percentuais calculados:', { devPercent, autoPercent, dataPercent, theoryPercent, englishPercent });
  
  // Atualizar barras
  const devBar = document.getElementById('dev-focus-bar');
  const autoBar = document.getElementById('auto-focus-bar');
  const dataBar = document.getElementById('data-focus-bar');
  const theoryBar = document.getElementById('theory-focus-bar');
  const englishBar = document.getElementById('english-focus-bar');
  
  if (devBar) devBar.style.width = `${devPercent}%`;
  if (autoBar) autoBar.style.width = `${autoPercent}%`;
  if (dataBar) dataBar.style.width = `${dataPercent}%`;
  if (theoryBar) theoryBar.style.width = `${theoryPercent}%`;
  if (englishBar) englishBar.style.width = `${englishPercent}%`;
  
  // Atualizar porcentagens
  const devPercentEl = document.getElementById('dev-focus-percentage');
  const autoPercentEl = document.getElementById('auto-focus-percentage');
  const dataPercentEl = document.getElementById('data-focus-percentage');
  const theoryPercentEl = document.getElementById('theory-focus-percentage');
  const englishPercentEl = document.getElementById('english-focus-percentage');
  
  if (devPercentEl) devPercentEl.textContent = `${devPercent}%`;
  if (autoPercentEl) autoPercentEl.textContent = `${autoPercent}%`;
  if (dataPercentEl) dataPercentEl.textContent = `${dataPercent}%`;
  if (theoryPercentEl) theoryPercentEl.textContent = `${theoryPercent}%`;
  if (englishPercentEl) englishPercentEl.textContent = `${englishPercent}%`;
}

// Inicializar Timeline
function initTimeline() {
  console.log('Inicializando timeline...');
  
  const timelineContainer = document.getElementById('modules-timeline');
  const moduleGrid = document.getElementById('modules-grid');
  
  if (!timelineContainer || !moduleGrid) {
    console.error('Elementos de timeline não encontrados');
    return;
  }
  
  // Limpar conteúdo anterior
  timelineContainer.innerHTML = '';
  moduleGrid.innerHTML = '';
  
  // Criar linha do tempo simplificada
  const timelineInfo = document.createElement('div');
  timelineInfo.className = 'timeline-info';
  timelineInfo.innerHTML = `
    <h4>Cronograma Completo</h4>
    <p>9 módulos distribuídos ao longo de 27 semanas (${modulesData[0].start_date} a ${modulesData[modulesData.length - 1].end_date})</p>
  `;
  timelineContainer.appendChild(timelineInfo);
  
  // Criar cards dos módulos
  modulesData.forEach(module => {
    const moduleCard = document.createElement('div');
    moduleCard.className = 'card module-card';
    
    const dominantFocus = getDominantFocus(module);
    
    moduleCard.innerHTML = `
      <div class="card__header ${dominantFocus}">
        <div class="module-header">
          <h4>${module.name}</h4>
          <div class="module-id">${module.id}</div>
        </div>
      </div>
      <div class="card__body">
        <div class="module-info">
          <div class="module-info-item">
            <span>Duração</span>
            <strong>${module.duration_weeks} semanas</strong>
          </div>
          <div class="module-info-item">
            <span>Horas/Semana</span>
            <strong>${module.hours_per_week}h</strong>
          </div>
          <div class="module-info-item">
            <span>Inglês Técnico</span>
            <strong>${module.tech_english}%</strong>
          </div>
          <div class="module-info-item">
            <span>Prática</span>
            <strong>${module.practical}%</strong>
          </div>
        </div>
        <div class="module-description">
          ${module.description}
        </div>
        <div class="module-tools">
          <span>Ferramentas</span>
          <div class="tools-list">
            ${module.tools.map(tool => `<div class="tool-badge">${tool}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
    
    moduleGrid.appendChild(moduleCard);
  });
  
  console.log('Timeline criada com', modulesData.length, 'módulos');
}

// Inicializar Cronograma Semanal
function initWeeklySchedule() {
  console.log('Inicializando cronograma semanal...');
  
  const weeklyScheduleBody = document.getElementById('weekly-schedule-body');
  
  if (!weeklyScheduleBody) {
    console.error('Elemento de cronograma semanal não encontrado');
    return;
  }
  
  // Limpar conteúdo anterior
  weeklyScheduleBody.innerHTML = '';
  
  const weekdays = {
    monday: 'Segunda-feira',
    tuesday: 'Terça-feira',
    wednesday: 'Quarta-feira',
    thursday: 'Quinta-feira',
    friday: 'Sexta-feira',
    saturday: 'Sábado',
    sunday: 'Domingo'
  };
  
  // Criar linhas para cada dia da semana
  for (const day in weeklySchedule) {
    const row = document.createElement('tr');
    
    const dayCell = document.createElement('td');
    dayCell.textContent = weekdays[day];
    row.appendChild(dayCell);
    
    const morningCell = document.createElement('td');
    if (weeklySchedule[day].morning) {
      morningCell.textContent = weeklySchedule[day].morning;
    } else if (weeklySchedule[day].rest) {
      morningCell.textContent = weeklySchedule[day].rest;
      morningCell.colSpan = 3;
    } else {
      morningCell.textContent = '-';
    }
    row.appendChild(morningCell);
    
    if (!weeklySchedule[day].rest) {
      const evening1Cell = document.createElement('td');
      evening1Cell.textContent = weeklySchedule[day].evening1 || '-';
      row.appendChild(evening1Cell);
      
      const evening2Cell = document.createElement('td');
      evening2Cell.textContent = weeklySchedule[day].evening2 || '-';
      row.appendChild(evening2Cell);
    }
    
    weeklyScheduleBody.appendChild(row);
  }
  
  // Atualizar distribuição de horas
  const hoursPerWeekEl = document.getElementById('hours-per-week');
  const morningHoursEl = document.getElementById('morning-hours');
  const eveningHoursEl = document.getElementById('evening-hours');
  const saturdayHoursEl = document.getElementById('saturday-hours');
  
  if (hoursPerWeekEl) hoursPerWeekEl.textContent = totals.avg_hours_per_week;
  if (morningHoursEl) morningHoursEl.textContent = '2.5';
  if (eveningHoursEl) eveningHoursEl.textContent = '10';
  if (saturdayHoursEl) saturdayHoursEl.textContent = '3';
}

// Inicializar Módulos Detalhados (Accordion)
function initModulesAccordion() {
  console.log('Inicializando accordion de módulos...');
  
  const accordionContainer = document.getElementById('modules-accordion');
  
  if (!accordionContainer) {
    console.error('Container do accordion não encontrado');
    return;
  }
  
  // Limpar conteúdo anterior
  accordionContainer.innerHTML = '';
  
  // Criar accordion para cada módulo
  modulesData.forEach(module => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';
    accordionItem.setAttribute('data-module-id', module.id);
    
    // Criar header do accordion
    const accordionHeader = document.createElement('div');
    accordionHeader.className = 'accordion-header';
    accordionHeader.innerHTML = `
      <h3 class="accordion-title">
        <span class="module-id">${module.id}</span> ${module.name}
      </h3>
      <span class="accordion-icon">▼</span>
    `;
    
    // Criar conteúdo do accordion
    const accordionContent = document.createElement('div');
    accordionContent.className = 'accordion-content';
    
    const accordionInner = document.createElement('div');
    accordionInner.className = 'accordion-inner';
    accordionInner.innerHTML = `
      <div class="module-details">
        <div>
          <div class="module-detail-item">
            <h5>Descrição</h5>
            <div>${module.description}</div>
          </div>
          <div class="module-detail-item">
            <h5>Datas</h5>
            <div>
              <strong>Início:</strong> ${module.start_date}<br>
              <strong>Término:</strong> ${module.end_date}<br>
              <strong>Duração:</strong> ${module.duration_weeks} semanas
            </div>
          </div>
          <div class="module-detail-item">
            <h5>Distribuição de Horas</h5>
            <div>
              <strong>Horas por semana:</strong> ${module.hours_per_week}<br>
              <strong>Total de horas:</strong> ${module.duration_weeks * module.hours_per_week}<br>
              <strong>Prática:</strong> ${module.practical}%<br>
              <strong>Inglês técnico:</strong> ${module.tech_english}%
            </div>
          </div>
        </div>
        <div>
          <div class="module-detail-item">
            <h5>Áreas de Foco</h5>
            <div class="module-focus-bars">
              <div class="module-focus-bar">
                <span>Desenvolvimento</span>
                <div class="module-focus-bar-container">
                  <div class="module-focus-bar-fill" style="background-color: #1FB8CD; width: ${module.focus.development}%;"></div>
                </div>
                <span>${module.focus.development}%</span>
              </div>
              <div class="module-focus-bar">
                <span>Automação</span>
                <div class="module-focus-bar-container">
                  <div class="module-focus-bar-fill" style="background-color: #5D878F; width: ${module.focus.automation}%;"></div>
                </div>
                <span>${module.focus.automation}%</span>
              </div>
              <div class="module-focus-bar">
                <span>Dados</span>
                <div class="module-focus-bar-container">
                  <div class="module-focus-bar-fill" style="background-color: #FFC185; width: ${module.focus.data}%;"></div>
                </div>
                <span>${module.focus.data}%</span>
              </div>
              <div class="module-focus-bar">
                <span>Teoria</span>
                <div class="module-focus-bar-container">
                  <div class="module-focus-bar-fill" style="background-color: #ECEBD5; width: ${module.focus.theory}%;"></div>
                </div>
                <span>${module.focus.theory}%</span>
              </div>
            </div>
          </div>
          <div class="module-detail-item">
            <h5>Ferramentas</h5>
            <div class="module-tools-list">
              ${module.tools.map(tool => `<div class="tool-badge">${tool}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
    
    accordionContent.appendChild(accordionInner);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionContent);
    accordionContainer.appendChild(accordionItem);
    
    // Adicionar evento de clique
    accordionHeader.addEventListener('click', function() {
      accordionItem.classList.toggle('active');
      console.log('Accordion toggleado:', module.name);
    });
  });
}

// Inicializar Personalização
function initCustomize() {
  console.log('Inicializando personalização...');
  
  const weeklyHoursSlider = document.getElementById('weekly-hours');
  const weeklyHoursValue = document.getElementById('weekly-hours-value');
  const englishPercentageSlider = document.getElementById('english-percentage');
  const englishPercentageValue = document.getElementById('english-percentage-value');
  const applyCustomBtn = document.getElementById('apply-custom');
  const resetCustomBtn = document.getElementById('reset-custom');
  
  if (!weeklyHoursSlider || !englishPercentageSlider) {
    console.error('Elementos de personalização não encontrados');
    return;
  }
  
  // Atualizar valor do slider de horas semanais
  weeklyHoursSlider.addEventListener('input', function() {
    if (weeklyHoursValue) weeklyHoursValue.textContent = this.value;
    updatePreview();
  });
  
  // Atualizar valor do slider de inglês técnico
  englishPercentageSlider.addEventListener('input', function() {
    if (englishPercentageValue) englishPercentageValue.textContent = this.value;
    updatePreview();
  });
  
  // Adicionar evento para checkboxes e sliders de prioridade
  document.querySelectorAll('.priority-checkbox, .weight-slider').forEach(item => {
    item.addEventListener('change', updatePreview);
    item.addEventListener('input', updatePreview);
  });
  
  // Aplicar alterações
  if (applyCustomBtn) {
    applyCustomBtn.addEventListener('click', function() {
      alert('Alterações aplicadas com sucesso!');
    });
  }
  
  // Resetar alterações
  if (resetCustomBtn) {
    resetCustomBtn.addEventListener('click', function() {
      weeklyHoursSlider.value = totals.avg_hours_per_week;
      if (weeklyHoursValue) weeklyHoursValue.textContent = totals.avg_hours_per_week;
      
      englishPercentageSlider.value = 35;
      if (englishPercentageValue) englishPercentageValue.textContent = '35';
      
      const devPriority = document.getElementById('dev-priority');
      const autoPriority = document.getElementById('auto-priority');
      const dataPriority = document.getElementById('data-priority');
      const theoryPriority = document.getElementById('theory-priority');
      
      if (devPriority) devPriority.checked = true;
      if (autoPriority) autoPriority.checked = true;
      if (dataPriority) dataPriority.checked = true;
      if (theoryPriority) theoryPriority.checked = false;
      
      const devWeight = document.getElementById('dev-weight');
      const autoWeight = document.getElementById('auto-weight');
      const dataWeight = document.getElementById('data-weight');
      const theoryWeight = document.getElementById('theory-weight');
      
      if (devWeight) devWeight.value = 4;
      if (autoWeight) autoWeight.value = 3;
      if (dataWeight) dataWeight.value = 3;
      if (theoryWeight) theoryWeight.value = 1;
      
      updatePreview();
    });
  }
  
  // Inicializar gráfico de prévia se Chart.js estiver disponível
  if (typeof Chart !== 'undefined') {
    initPreviewChart();
  } else {
    console.warn('Chart.js não está disponível');
  }
  
  updatePreview();
}

// Inicializar gráfico de prévia
function initPreviewChart() {
  const ctx = document.getElementById('preview-chart');
  
  if (!ctx) {
    console.error('Canvas do gráfico de prévia não encontrado');
    return;
  }
  
  try {
    previewChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Desenvolvimento', 'Automação', 'Dados', 'Teoria', 'Inglês'],
        datasets: [{
          label: 'Distribuição de Horas (%)',
          data: [0, 0, 0, 0, 0],
          backgroundColor: [
            '#1FB8CD', '#5D878F', '#FFC185', '#ECEBD5', '#B4413C'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
    console.log('Gráfico de prévia inicializado');
  } catch (error) {
    console.error('Erro ao inicializar gráfico de prévia:', error);
  }
}

// Atualizar prévia com base nas configurações
function updatePreview() {
  const weeklyHoursEl = document.getElementById('weekly-hours');
  const englishPercentageEl = document.getElementById('english-percentage');
  
  if (!weeklyHoursEl || !englishPercentageEl) return;
  
  const weeklyHours = parseFloat(weeklyHoursEl.value);
  const englishPercentage = parseInt(englishPercentageEl.value);
  
  const devPriority = document.getElementById('dev-priority');
  const autoPriority = document.getElementById('auto-priority');
  const dataPriority = document.getElementById('data-priority');
  const theoryPriority = document.getElementById('theory-priority');
  
  const devWeight = document.getElementById('dev-weight');
  const autoWeight = document.getElementById('auto-weight');
  const dataWeight = document.getElementById('data-weight');
  const theoryWeight = document.getElementById('theory-weight');
  
  const devChecked = devPriority ? devPriority.checked : true;
  const autoChecked = autoPriority ? autoPriority.checked : true;
  const dataChecked = dataPriority ? dataPriority.checked : true;
  const theoryChecked = theoryPriority ? theoryPriority.checked : false;
  
  const devWeightValue = devChecked ? (devWeight ? parseInt(devWeight.value) : 4) : 0;
  const autoWeightValue = autoChecked ? (autoWeight ? parseInt(autoWeight.value) : 3) : 0;
  const dataWeightValue = dataChecked ? (dataWeight ? parseInt(dataWeight.value) : 3) : 0;
  const theoryWeightValue = theoryChecked ? (theoryWeight ? parseInt(theoryWeight.value) : 1) : 0;
  
  // Calcular total de pesos
  const totalWeight = devWeightValue + autoWeightValue + dataWeightValue + theoryWeightValue;
  
  // Calcular percentagens com base nos pesos
  const devPercent = totalWeight > 0 ? Math.round((devWeightValue / totalWeight) * 100) : 0;
  const autoPercent = totalWeight > 0 ? Math.round((autoWeightValue / totalWeight) * 100) : 0;
  const dataPercent = totalWeight > 0 ? Math.round((dataWeightValue / totalWeight) * 100) : 0;
  const theoryPercent = totalWeight > 0 ? Math.round((theoryWeightValue / totalWeight) * 100) : 0;
  
  // Ajustar para o novo total de horas semanais
  const totalWeeks = totals.total_weeks;
  const totalHours = weeklyHours * totalWeeks;
  
  // Atualizar valores de prévia
  const previewWeeksEl = document.getElementById('preview-weeks');
  const previewHoursEl = document.getElementById('preview-hours');
  const previewEndDateEl = document.getElementById('preview-end-date');
  
  if (previewWeeksEl) previewWeeksEl.textContent = totalWeeks;
  if (previewHoursEl) previewHoursEl.textContent = totalHours.toFixed(0);
  
  // Calcular nova data de término
  if (previewEndDateEl) {
    try {
      const startDate = parseDate(modulesData[0].start_date);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + (totalWeeks * 7));
      previewEndDateEl.textContent = formatDate(endDate);
    } catch (error) {
      console.error('Erro ao calcular data de término:', error);
    }
  }
  
  // Atualizar gráfico se disponível
  if (previewChart && previewChart.data) {
    previewChart.data.datasets[0].data = [devPercent, autoPercent, dataPercent, theoryPercent, englishPercentage];
    previewChart.update();
  }
}

// Inicializar Calculadora
function initCalculator() {
  console.log('Inicializando calculadora...');
  
  const calculateBtn = document.getElementById('calculate-btn');
  
  if (!calculateBtn) {
    console.error('Botão de calcular não encontrado');
    return;
  }
  
  calculateBtn.addEventListener('click', function() {
    const weekdayMorningEl = document.getElementById('weekday-morning');
    const weekdayEveningEl = document.getElementById('weekday-evening');
    const weekendHoursEl = document.getElementById('weekend-hours');
    
    if (!weekdayMorningEl || !weekdayEveningEl || !weekendHoursEl) {
      console.error('Elementos da calculadora não encontrados');
      return;
    }
    
    const weekdayMorning = parseFloat(weekdayMorningEl.value);
    const weekdayEvening = parseFloat(weekdayEveningEl.value);
    const weekendHours = parseFloat(weekendHoursEl.value);
    
    // Calcular horas semanais
    const weeklyHours = (weekdayMorning * 5) + (weekdayEvening * 5) + weekendHours;
    
    // Calcular duração do programa
    const programDuration = Math.ceil(totals.total_hours / weeklyHours);
    
    // Calcular nova data de término
    let endDateFormatted = '--/--/----';
    try {
      const startDate = parseDate(modulesData[0].start_date);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + (programDuration * 7));
      endDateFormatted = formatDate(endDate);
    } catch (error) {
      console.error('Erro ao calcular data de término:', error);
    }
    
    // Atualizar resultados
    const resultWeeklyHoursEl = document.getElementById('result-weekly-hours');
    const resultDurationEl = document.getElementById('result-duration');
    const resultEndDateEl = document.getElementById('result-end-date');
    
    if (resultWeeklyHoursEl) resultWeeklyHoursEl.textContent = weeklyHours.toFixed(1);
    if (resultDurationEl) resultDurationEl.textContent = `${programDuration} semanas`;
    if (resultEndDateEl) resultEndDateEl.textContent = endDateFormatted;
    
    // Exibir cronograma sugerido
    generateSuggestedSchedule(weekdayMorning, weekdayEvening, weekendHours);
    
    // Mostrar resultados
    const calculatorResults = document.getElementById('calculator-results');
    if (calculatorResults) {
      calculatorResults.classList.add('active');
    }
  });
}

// Gerar cronograma sugerido com base nas horas disponíveis
function generateSuggestedSchedule(morningHours, eveningHours, weekendHours) {
  const suggestedSchedule = document.getElementById('suggested-schedule');
  
  if (!suggestedSchedule) {
    console.error('Container do cronograma sugerido não encontrado');
    return;
  }
  
  suggestedSchedule.innerHTML = '';
  
  // Dias da semana
  const weekdays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
  
  // De segunda a sexta
  for (let i = 0; i < 5; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'suggested-day';
    
    let dayContent = `<h5>${weekdays[i]}</h5><div class="suggested-slots">`;
    
    if (morningHours > 0) {
      dayContent += `
        <div class="suggested-slot">
          <div class="suggested-time">06:30 - 07:00</div>
          <div>Inglês Técnico + Revisão Rápida</div>
        </div>
      `;
    }
    
    if (eveningHours > 0) {
      const eveningHoursPerSlot = eveningHours / 2;
      const startTime = 19;
      const endTime = startTime + eveningHours;
      
      dayContent += `
        <div class="suggested-slot">
          <div class="suggested-time">${startTime}:30 - ${startTime + eveningHoursPerSlot}:30</div>
          <div>Estudo Prático</div>
        </div>
        <div class="suggested-slot">
          <div class="suggested-time">${startTime + eveningHoursPerSlot}:30 - ${endTime}:30</div>
          <div>Desenvolvimento/Automação</div>
        </div>
      `;
    }
    
    dayContent += '</div>';
    dayDiv.innerHTML = dayContent;
    suggestedSchedule.appendChild(dayDiv);
  }
  
  // Sábado
  if (weekendHours > 0) {
    const saturdayDiv = document.createElement('div');
    saturdayDiv.className = 'suggested-day';
    saturdayDiv.innerHTML = `
      <h5>Sábado</h5>
      <div class="suggested-slots">
        <div class="suggested-slot">
          <div class="suggested-time">09:00 - ${9 + weekendHours}:00</div>
          <div>Sessão Concentrada de Prática</div>
        </div>
      </div>
    `;
    suggestedSchedule.appendChild(saturdayDiv);
  }
  
  // Domingo
  const sundayDiv = document.createElement('div');
  sundayDiv.className = 'suggested-day';
  sundayDiv.innerHTML = `
    <h5>Domingo</h5>
    <div class="suggested-slots">
      <div class="suggested-slot">
        <div>Descanso</div>
      </div>
    </div>
  `;
  suggestedSchedule.appendChild(sundayDiv);
}
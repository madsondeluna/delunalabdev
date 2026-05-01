document.addEventListener('DOMContentLoaded', () => {
    // --- INICIALIZAÇÃO DO NGL ---
    const isDark = document.documentElement.classList.contains('dark-mode');
    const bgColor = isDark ? '#1d2d44' : '#e8eaed';
    const viewport = document.getElementById('viewport');
    const stage = new NGL.Stage("viewport", { backgroundColor: bgColor });
    let currentStructure;

    // --- ELEMENTOS DO DOM ---
    const pdbUpload = document.getElementById('pdb-upload-3d');
    const fileNameDisplay = document.getElementById('file-name-display-3d');
    const representationSelect = document.getElementById('representation-select');
    const colorSelect = document.getElementById('color-select');
    const centerBtn = document.getElementById('center-btn');
    const spinBtn = document.getElementById('spin-btn');

    // --- FUNÇÕES ---
    function handleResize() {
        stage.handleResize();
    }

    function loadStructure(file) {
        if (!file) return;

        fileNameDisplay.textContent = `Loading: ${file.name}...`;
        stage.removeAllComponents();

        stage.loadFile(file).then(component => {
            currentStructure = component;
            component.addRepresentation(representationSelect.value, {
                color: colorSelect.value
            });
            component.autoView();
            fileNameDisplay.textContent = `Loaded: ${file.name}`;
            stage.handleResize();
        }).catch(error => {
            console.error(error);
            fileNameDisplay.textContent = "Error loading file.";
        });
    }

    function updateRepresentation() {
        if (currentStructure) {
            currentStructure.removeAllRepresentations();
            currentStructure.addRepresentation(representationSelect.value, {
                color: colorSelect.value
            });
        }
    }

    // --- EVENT LISTENERS ---
    window.addEventListener("resize", handleResize, false);
    
    pdbUpload.addEventListener('change', (event) => {
        loadStructure(event.target.files[0]);
    });

    representationSelect.addEventListener('change', updateRepresentation);
    colorSelect.addEventListener('change', updateRepresentation);

    centerBtn.addEventListener('click', () => {
        if (currentStructure) currentStructure.autoView();
    });

    spinBtn.addEventListener('click', () => {
        stage.toggleSpin();
    });
});
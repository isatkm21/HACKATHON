document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('donaciones-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tipoDonante = document.getElementById('tipo-donante').value;
        const nombreDonante = document.getElementById('nombre') ? document.getElementById('nombre').value : '';
        const nombreEmpresa = document.getElementById('nombre-empresa') ? document.getElementById('nombre-empresa').value : '';
        const nombreOrgSelect = document.getElementById('org');
        const nombreOrg = nombreOrgSelect.options[nombreOrgSelect.selectedIndex].text;

       
        let nombreFinal = "Anónimo";
        if (tipoDonante === "persona") {
            nombreFinal = nombreDonante;
        } else if (tipoDonante === "empresa") {
            nombreFinal = nombreEmpresa;
        }

        
        let logoOrg = '';
        switch (nombreOrgSelect.value) {
            case 'org1':
                logoOrg = 'uww.png';
                break;
            case 'org2':
                logoOrg = 'DR.png';
                break;
            case 'org3':
                logoOrg = 'unicef.png';
                break;
            case 'org4':
                logoOrg = 'cr.png';
                break;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('landscape'); 

       
        const margin = 20;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const centeredText = (text, y) => {
            const textWidth = doc.getTextWidth(text);
            const textX = (pageWidth - textWidth) / 2;
            doc.text(text, textX, y);
        };

     
        doc.setDrawColor(0);
        doc.setLineWidth(1);
        doc.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);

 
        const logoWidth = 30; 
        const logoHeight = 30; 
        const logoDonathon = 'logo_blue.png';
        const logoXDonathon = (pageWidth / 2) - logoWidth - 10; 
        const logoY = margin + 20;
        doc.addImage(logoDonathon, 'PNG', logoXDonathon, logoY, logoWidth, logoHeight); 

        const logoXOrg = (pageWidth / 2) + 10; 
        doc.addImage(logoOrg, 'PNG', logoXOrg, logoY, logoWidth, logoHeight);

        
        const textStartY = logoY + logoHeight + 20;
        doc.setFont("times", "bold");
        doc.setFontSize(32);
        centeredText("CERTIFICADO DE DONACIÓN", textStartY);

        doc.setFont("times", "normal");
        doc.setFontSize(20);
        centeredText(`Gracias ${nombreFinal} por haber donado en Donathon!`, textStartY + 20);
        centeredText(`Has contribuido con la organización ${nombreOrg}`, textStartY + 40);
        centeredText(`Nos aseguraremos de que tu aporte llegue a un buen lugar!`, textStartY + 60);

        
        const backgroundDesign = 'abajo.png';
        const designWidth = pageWidth - margin * 2; 
        const designHeight = designWidth * 0.25; 
        const designY = pageHeight - margin - designHeight; 

        doc.addImage(backgroundDesign, 'PNG', margin, designY, designWidth, designHeight);

     
        doc.save('certificado_donacion.pdf');

        
        form.submit();
    });
});

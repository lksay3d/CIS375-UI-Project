document.addEventListener('DOMContentLoaded', function () {
    
    var addedRows = [];

    document.getElementById('addFunc').addEventListener('click', function () {
    
        var functionRows = document.querySelectorAll('.function-row');
        if (functionRows.length < 10) {
        
            var newRow = document.createElement('tr');
            newRow.classList.add('function-row');
            newRow.innerHTML = `
                <td id="funcName"><input type="text"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="ccEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="planEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="raEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="eaEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="edEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="crcEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="crtEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="ceEst"><input type="number"  value="" style="width: 60px;padding: 5px;border: 1px solid #ddd;border-radius: 5px;text-align:center;"></td>
                <td id="funcTotal" style="width: 60px; padding: 5px; border: 1px solid #ddd; border-radius: 5px;">0</td>
            `;

           
            var referenceRow = document.getElementById('functions');

            
            referenceRow.parentNode.insertBefore(newRow, referenceRow.nextSibling);

            
            addedRows.push(newRow);
        } else {
            alert('Maximum limit of 10 functions reached.');
        }
    });

    document.getElementById('reFunc').addEventListener('click', function () {
        
        if (addedRows.length > 0) {
            
            var lastAddedRow = addedRows.pop();

            
            lastAddedRow.parentNode.removeChild(lastAddedRow);
        } else {
            alert('No functions to remove.');
        }
    });

    document.getElementById('Calculate').addEventListener('click', function () {
        
        let ccTotal = 0,
            planTotal = 0,
            raTotal = 0,
            eaTotal = 0,
            edTotal = 0,
            crcTotal = 0,
            crtTotal = 0,
            ceTotal = 0;
    
        
        document.querySelectorAll('.function-row').forEach(row => {
            
            let total = 0;
            row.querySelectorAll('td input[type="number"]').forEach(input => {
                total += parseFloat(input.value) || 0;
            });
            row.querySelector('td#funcTotal').textContent = total.toFixed(2);
    
            
            ccTotal += parseFloat(row.querySelector('td#ccEst input').value) || 0;
            planTotal += parseFloat(row.querySelector('td#planEst input').value) || 0;
            raTotal += parseFloat(row.querySelector('td#raEst input').value) || 0;
            eaTotal += parseFloat(row.querySelector('td#eaEst input').value) || 0;
            edTotal += parseFloat(row.querySelector('td#edEst input').value) || 0;
            crcTotal += parseFloat(row.querySelector('td#crcEst input').value) || 0;
            crtTotal += parseFloat(row.querySelector('td#crtEst input').value) || 0;
            ceTotal += parseFloat(row.querySelector('td#ceEst input').value) || 0;
        });
    
        // Update the total row with the calculated values
        document.getElementById('ccTotal').textContent = ccTotal.toFixed(2);
        document.getElementById('planTotal').textContent = planTotal.toFixed(2);
        document.getElementById('raTotal').textContent = raTotal.toFixed(2);
        document.getElementById('eaTotal').textContent = eaTotal.toFixed(2);
        document.getElementById('edTotal').textContent = edTotal.toFixed(2);
        document.getElementById('crcTotal').textContent = crcTotal.toFixed(2);
        document.getElementById('crtTotal').textContent = crtTotal.toFixed(2);
        document.getElementById('ceTotal').textContent = ceTotal.toFixed(2);
    
        // Calculate and update the grand total
        let grandTotal = ccTotal + planTotal + raTotal + eaTotal + edTotal + crcTotal + crtTotal + ceTotal;
        document.getElementById('Total').textContent =  grandTotal.toFixed(2);

         // Calculate and update the Effort total
         let EffortTotal = ccTotal + planTotal + raTotal + eaTotal + edTotal + crcTotal + crtTotal + ceTotal;
        document.getElementById('Total').textContent = EffortTotal.toFixed(2);

    
        let ccEffort = ((ccTotal / EffortTotal) * 100);
        let planEffort = ((planTotal / EffortTotal) * 100);
        let raEffort = ((raTotal / EffortTotal) * 100);
        let eaEffort = ((eaTotal / EffortTotal) * 100);
        let edEffort = ((edTotal / EffortTotal) * 100);
        let crcEffort = ((crcTotal / EffortTotal) * 100);
        let crtEffort = ((crtTotal / EffortTotal) * 100);
        let ceEffort = ((ceTotal / EffortTotal) * 100);

        
        document.getElementById('ccEffort').textContent = ccEffort.toFixed(2) + '%';
        document.getElementById('planEffort').textContent = planEffort.toFixed(2) + '%';
        document.getElementById('raEffort').textContent = raEffort.toFixed(2) + '%';
        document.getElementById('eaEffort').textContent = eaEffort.toFixed(2) + '%';
        document.getElementById('edEffort').textContent = edEffort.toFixed(2) + '%';
        document.getElementById('crcEffort').textContent = crcEffort.toFixed(2) + '%';
        document.getElementById('crtEffort').textContent = crtEffort.toFixed(2) + '%';
        document.getElementById('ceEffort').textContent = ceEffort.toFixed(2) + '%';

        
        let totEffort = ccEffort + planEffort + raEffort + eaEffort + edEffort + crcEffort + crtEffort + ceEffort;
        document.getElementById('totEffort').textContent = totEffort.toFixed(2) + '%';
        });
    
    

    

});
















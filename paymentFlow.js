// paymentFlow.js

// Hook into window load to override the proceedToBook behavior mapped in script.js
window.addEventListener('DOMContentLoaded', () => {
    window.proceedToBook = function () {
        const btn = document.querySelector('.btn-primary');
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Finalizing...';
            btn.disabled = true;
        }

        setTimeout(() => {
            // Save initial data before payment
            const location = state.currentHub.name;
            const slot = state.selectedSlot;
            const time = new Date().toLocaleString();
            const rawPrice = state.currentHub.price;
            const amount = "$" + (rawPrice * 60).toFixed(2); // assuming price is per min, 1 hour rate for mock

            localStorage.setItem("pending_booking", JSON.stringify({ location, slot, time, amount }));

            // Update Payment UI details
            const payAmountEl = document.getElementById("pay-amount");
            if (payAmountEl) payAmountEl.innerText = amount;

            // Hide Workspace, Show Payment View
            document.getElementById('hub-detail-workspace').classList.add('hidden');
            document.getElementById('payment-view').classList.remove('hidden');

            if (btn) {
                btn.innerHTML = 'Initialize Reservation';
                btn.disabled = false;
            }
        }, 800);
    };
});

function mockPayNow() {
    const payBtn = document.getElementById('pay-now-btn');
    if (payBtn) {
        payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Payment...';
        payBtn.disabled = true;
    }

    // Simulate 2-3 sec network call
    setTimeout(() => {
        // Complete the flow
        document.getElementById('payment-view').classList.add('hidden');

        // Grab pending data for the success view text
        const pending = JSON.parse(localStorage.getItem("pending_booking"));
        if (pending) {
            document.getElementById('final-slot').textContent = pending.slot;
            document.getElementById('final-hub').textContent = pending.location;

            // Save permanently as required
            localStorage.setItem("booking", JSON.stringify(pending));
        }

        // Show Success View
        document.getElementById('success-view').classList.remove('hidden');

        // Ensure receipt is hidden initially until clicking 'View Receipt'
        const receipt = document.getElementById("receipt");
        if (receipt) receipt.style.display = "none";

        if (payBtn) {
            payBtn.innerHTML = 'Pay Now';
            payBtn.disabled = false;
        }
    }, 2500);
}

function viewReceipt() {
    const data = JSON.parse(localStorage.getItem("booking"));
    if (data) {
        document.getElementById("rLocation").innerText = "Location: " + data.location;
        document.getElementById("rSlot").innerText = "Slot: " + data.slot;
        document.getElementById("rTime").innerText = "Time: " + data.time;
        // Optionally add amount to details if needed
    }
    document.getElementById("receipt").style.display = "block";
}

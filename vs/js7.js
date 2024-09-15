document.addEventListener('DOMContentLoaded', function() {
    const adTable = document.getElementById('ad-table');
    const analyticsContent = document.getElementById('analytics-content');
  
    // Example data for analytics
    const adAnalytics = {
      1: {
        adName: 'Summer Sale',
        description: 'Discount on all summer clothing items.',
        imageVideo: 'summer_sale.jpg',
        adType: 'AR',
        averageDwellTime: '5 sec',
        totalTimePlayed: '120 Hours',
        hourly: {
          totalTime: '20 min',
          passerCount: [20, 35, 50, 65, 80],
          attentionRate: [10, 25, 50, 75, 90]
        }
      }
      // Add more analytics data if needed
    };
  
    // // Event listener for "View Analytics" buttons
    // adTable.addEventListener('click', function(e) {
    //   if (e.target && e.target.matches('button.view-analytics-btn')) {
    //     const adId = e.target.closest('tr').dataset.adId;
    //     const analytics = adAnalytics[adId];
  
    //     if (analytics) {
    //       renderAnalytics(analytics);
    //     }
    //   }
    // });
  
    // function renderAnalytics(analytics) {
    //   analyticsContent.innerHTML = `
    //     <h3>Ad Name: ${analytics.adName}</h3>
    //     <p>Description: ${analytics.description}</p>
    //     <p>Image/Video: ${analytics.imageVideo}</p>
    //     <p>Ad Type: ${analytics.adType}</p>
    //     <div class="analytics-stats">
    //       <div><strong>Average Dwell Time:</strong> ${analytics.averageDwellTime}</div>
    //       <div><strong>Total Time Ad Played:</strong> ${analytics.totalTimePlayed}</div>
    //     </div>
    //     <h4>Hourly Data</h4>
    //     <div class="analytics-hourly">
    //       <p>Total Time Played: ${analytics.hourly.totalTime}</p>
    //       <p>Passer Count: ${analytics.hourly.passerCount.join(', ')}</p>
    //       <p>Attention Rate: ${analytics.hourly.attentionRate.join(', ')}</p>
    //     </div>
    //   `;
    // }
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => tab.classList.remove('active'));
    
        const buttons = document.querySelectorAll('.tab-button');
        buttons.forEach(button => button.classList.remove('active'));
    
        document.getElementById(tabId).classList.add('active');
        event.target.classList.add('active');
    }
    
  });
  
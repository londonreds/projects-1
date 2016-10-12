// Todo actions
import AppDispatcher from './Dispatcher';

export function filterGrid(filter) {
  AppDispatcher.handleFilterAction({
    actionType: 'FILTER_GRID',
    filter: filter
  });
}

export function downloadProjectDataCSV() {
    AppDispatcher.handleFilterAction({
        actionType: 'DOWNLOAD_CSV'
    });
}

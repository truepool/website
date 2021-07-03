import filesize from 'filesize';
import { config } from '../config';
import { PoolSize } from '../main-page/pool-size.interface';
import { Farmer } from './farmer.interface';

export async function loadLeaderboard(): Promise<void> {
  let farmers = await loadData();

  if (!farmers.length) {
    return;
  }

  // TODO: Remove once backend is okay
  farmers = farmers.sort((a, b) => b.points - a.points);

  setLeaderboard(farmers);
}

function isLeaderboard(): boolean {
  return Boolean(document.querySelector('.page-leaderboard'));
}

async function loadData(): Promise<Farmer[]> {
  try {
    const response = await window.fetch(`${config.baseUrl}/pool/farmer`);

    if (!response.ok) {
      console.error(response);
      return [];
    }

    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

function setLeaderboard(farmers: Farmer[]): void {
  const leaderboardTable = document.getElementById('leaderboard') as HTMLTableElement;
  leaderboardTable.classList.add('ready');

  const tbody = leaderboardTable.querySelector('tbody');

  farmers.forEach((farmer) => {
    const trClass = farmer.points <= 0 ? 'no-points' : '';
    tbody.innerHTML += `<tr class="${trClass}"><td>${farmer.points}</td><td>${farmer.launcher_id}</td></tr>`
  });
}

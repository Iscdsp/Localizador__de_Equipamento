import { Component, OnInit, ViewChild } from '@angular/core';
import { CargoTruckHistory } from 'src/app/models/cargo-truck-history.model';

import { History } from 'src/app/models/history.model';
import { CargoTruckHistoryService } from '../services/cargo-truck-history.service';

@Component({
  selector: 'app-historic-cargo-truck',
  templateUrl: './historic-cargo-truck.component.html',
  styleUrls: ['./historic-cargo-truck.component.css'],
})
export class HistoricCargoTruckComponent implements OnInit {
  historicos: History[] = [{ historico: 'Estado' }, { historico: 'Posição' }];
  stateHistories = this.cargoTruckHistory.getHistory();

  constructor(private cargoTruckHistory: CargoTruckHistoryService) {}

  ngOnInit(): void {
    this.stateHistories = this.stateHistories;
  }
}

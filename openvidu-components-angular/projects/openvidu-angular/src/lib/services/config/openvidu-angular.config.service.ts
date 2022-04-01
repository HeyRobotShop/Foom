import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OpenViduAngularConfig, ParticipantFactoryFunction } from '../../config/openvidu-angular.config';

// import { version } from '../../../../package.json';

/**
 * @internal
 */
@Injectable()
export class OpenViduAngularConfigService {
	private configuration: OpenViduAngularConfig;
	minimal = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	minimalObs: Observable<boolean>;
	participantName = <BehaviorSubject<string>>new BehaviorSubject('');
	participantNameObs: Observable<string>;
	prejoin = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	prejoinObs: Observable<boolean>;

	videoMuted = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	videoMutedObs: Observable<boolean>;
	audioMuted = <BehaviorSubject<boolean>>new BehaviorSubject(false);
	audioMutedObs: Observable<boolean>;
	screenshareButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	screenshareButtonObs: Observable<boolean>;

	fullscreenButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	fullscreenButtonObs: Observable<boolean>;

	leaveButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	leaveButtonObs: Observable<boolean>;

	participantsPanelButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	participantsPanelButtonObs: Observable<boolean>;

	chatPanelButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	chatPanelButtonObs: Observable<boolean>;

	displaySessionName = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	displaySessionNameObs: Observable<boolean>;

	displayLogo = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	displayLogoObs: Observable<boolean>;
	displayParticipantName = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	displayParticipantNameObs: Observable<boolean>;
	displayAudioDetection = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	displayAudioDetectionObs: Observable<boolean>;
	settingsButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	settingsButtonObs: Observable<boolean>;
	participantItemMuteButton = <BehaviorSubject<boolean>>new BehaviorSubject(true);
	participantItemMuteButtonObs: Observable<boolean>;

	constructor(@Inject('OPENVIDU_ANGULAR_CONFIG') config: OpenViduAngularConfig) {
		this.configuration = config;
		console.log(this.configuration);
		if (this.isProduction()) console.log('OpenVidu Angular Production Mode');
		this.minimalObs = this.minimal.asObservable();
		this.participantNameObs = this.participantName.asObservable();
		this.prejoinObs = this.prejoin.asObservable();
		this.videoMutedObs = this.videoMuted.asObservable();
		this.audioMutedObs = this.audioMuted.asObservable();
		//Toolbar observables
		this.screenshareButtonObs = this.screenshareButton.asObservable();
		this.fullscreenButtonObs = this.fullscreenButton.asObservable();
		this.leaveButtonObs = this.leaveButton.asObservable();
		this.participantsPanelButtonObs = this.participantsPanelButton.asObservable();
		this.chatPanelButtonObs = this.chatPanelButton.asObservable();
		this.displaySessionNameObs = this.displaySessionName.asObservable();
		this.displayLogoObs = this.displayLogo.asObservable();
		//Stream observables
		this.displayParticipantNameObs = this.displayParticipantName.asObservable();
		this.displayAudioDetectionObs = this.displayAudioDetection.asObservable();
		this.settingsButtonObs = this.settingsButton.asObservable();
		// Participant item observables
		this.participantItemMuteButtonObs = this.participantItemMuteButton.asObservable();
	}

	getConfig(): OpenViduAngularConfig {
		return this.configuration;
	}
	isProduction(): boolean {
		return this.configuration?.production;
	}

	// isWebcomponent(): boolean {
	// 	return this.configuration?.webcomponent;
	// }

	hasParticipantFactory(): boolean {
		return typeof this.getConfig().participantFactory === 'function';
	}

	getParticipantFactory(): ParticipantFactoryFunction {
		return this.getConfig().participantFactory;
	}
}

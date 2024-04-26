declare namespace SwitchAudioOutput {
    // Define a union type for possible audio devices
    export type AudioDevice = "Speaker" | "Bluetooth" | "Headphones";

    // Define a type for the function that gets audio devices
    export type GetAudioDevices = () => Promise<AudioDevice[]>;

    // Define a type for the function that sets audio device
    export type SetAudioDevice = (deviceName: AudioDevice) => Promise<boolean>;

    // Export the functions
    export const getAudioDevices: GetAudioDevices;
    export const setAudioDevice: SetAudioDevice;
}

export = SwitchAudioOutput;

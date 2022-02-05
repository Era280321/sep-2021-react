export interface IMission {

    mission_name: string,
    launch_date_local: number | string,
    launch_site: ILaunch_site,
    links: ILinks,
    rocket: IRocket
}

interface ILaunch_site {
    site_name_long: string
}

interface ILinks {
    article_link: null | string,
    video_link: null | string
}

interface IRocket {
    rocket_name: string,
    first_stage: IFirst_stage,
    second_stage: ISecond_stage
}

interface ISecond_stage {
    payloads: IPlay_loads []
}

interface IPlay_loads {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

interface IFirst_stage {
    cores: ICores[]
}

interface ICores {
    flight: number,
    core: ICore
}

interface ICore {
    reuse_count: number,
    status: string
}
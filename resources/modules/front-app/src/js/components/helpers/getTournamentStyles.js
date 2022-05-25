import {getResponsiveSetting} from "../../functions/getResponsiveSetting";
import {styledString} from "../../helpers/styles";

export default function getTournamentStyles(settings, elementId) {
  let styles = [
    'reacket-round-header',
        ['color', 'headers_color', 'color'],
        ['', 'headers_typographic', 'typographic'],
        ['padding', 'headers_padding', 'dimensions'],
    '}',

    'reacket-player-image',
        ['padding', 'image_padding', 'dimensions'],
    '}',

    '.reacket-player',
        ['padding', 'players_padding', 'dimensions'],
        ['background-color', 'players_background_color', 'color'],
        ["border-style", "players_border_type" ],
        ["border-width", "players_border_width", "dimensions"],
        ["border-color", "players_border_color", "color"],
        ["border-radius", "players_border_radius", "dimensions"],
        ['height', 'player_height', 'slider'],
    '}',
    '.reacket-player .reacket-player-score',
        ['padding', 'players_score_padding', 'dimensions'],
        ['color', 'players_score_color', 'color'],
        ['', 'players_score_typographic', 'typographic'],
    '}',
    '.reacket-player .reacket-player-seed',
        ['padding', 'players_seed_padding', 'dimensions'],
        ['color', 'players_seed_color', 'color'],
        ['', 'players_seed_typographic', 'typographic'],
    '}',
    '.reacket-player .reacket-player-name'
        ['color', 'players_label_color', 'color'],
        ['', 'players_label_typographic', 'typographic'],
    '}',

    '.reacket-player.reacket-winner',
        ['padding', 'players_winners_padding', 'dimensions'],
        ['background-color', 'players_winners_background_color', 'color'],
        ["border-style", "players_winners_border_type" ],
        ["border-width", "players_winners_border_width", "dimensions"],
        ["border-color", "players_winners_border_color", "color"],
        ["border-radius", "players_winners_border_radius", "dimensions"],
    '}',
    '.reacket-player.reacket-winner .reacket-player-score',
        ['padding', 'players_winners_score_padding', 'dimensions'],
        ['color', 'players_winners_score_color', 'color'],
        ['', 'players_winners_score_typographic', 'typographic'],
    '}',
    '.reacket-player.reacket-winner .reacket-player-seed',
        ['padding', 'players_winners_seed_padding', 'dimensions'],
        ['color', 'players_winners_seed_color', 'color'],
        ['', 'players_winners_seed_typographic', 'typographic'],
    '}',
    '.reacket-player.reacket-winner .reacket-player-name',
        ['color', 'players_winners_label_color', 'color'],
        ['', 'players_winners_label_typographic', 'typographic'],
    '}',

    '.reacket-highlighted',
        () => `background-color: ${getResponsiveSetting(settings, 'players_highlighted_background_color')?.color} !important;`,
        ['padding', 'players_highlighted_padding', 'dimensions'],
        ["border-style", "players_highlighted_border_type" ],
        ["border-width", "players_highlighted_border_width", "dimensions"],
        ["border-color", "players_highlighted_border_color", "color"],
        ["border-radius", "players_highlighted_border_radius", "dimensions"],
    '}',
    '.reacket-highlighted .reacket-player-score',
        () => `color: ${getResponsiveSetting(settings, 'players_highlighted_score_color')?.color} !important;`,
        ['padding', 'players_highlighted_score_padding', 'dimensions'],
        ['', 'players_highlighted_score_typographic', 'typographic'],
    '}',
    '.reacket-highlighted .reacket-player-seed',
        () => `color: ${getResponsiveSetting(settings, 'players_highlighted_seed_color')?.color} !important;`,
        ['padding', 'players_highlighted_seed_padding', 'dimensions'],
        ['', 'players_highlighted_seed_typographic', 'typographic'],
    '}',
    '.reacket-highlighted .reacket-player-name',
        () => `color: ${getResponsiveSetting(settings, 'players_highlighted_label_color')?.color} !important;`,
        ['', 'players_highlighted_label_typographic', 'typographic'],
    '}',



    '.reacket-horizontal-line',
        () => `border-style: ${getResponsiveSetting(settings, 'line_type')} !important;`,
        () => `border-color: ${getResponsiveSetting(settings, 'line_color')?.color} !important;`,
        () => `border-width: ${getResponsiveSetting(settings, 'line_width')?.size}px !important;`,
    '}',

    '.reacket-vertical-line',
        () => `border-right-style: ${getResponsiveSetting(settings, 'line_type')} !important;`,
        () => `border-right-color: ${getResponsiveSetting(settings, 'line_color')?.color} !important;`,
        () => `border-right-width: ${getResponsiveSetting(settings, 'line_width')?.size * 2}px !important;`,
    '}',

    '.reacket-match-id',
        ['padding', 'match_id_padding', 'dimensions'],
        ['color', 'match_id_color', 'color'],
        ['', 'match_id_typographic', 'typographic'],
    '}',
  ]

  return styledString(styles, settings)
}

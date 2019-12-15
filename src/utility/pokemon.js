import {
    hectogramToKg,
    hectogramToLb,
    decimetersToMeter,
    decimetersToImperialHeight
} from "./unit-conversion"

// create three digit pokemon id
function getPkmnImgId(id) {
    if (id < 10) {
        return "00" + id;
    } else if (id < 100) {
        return "0" + id;
    }
    return id.toString();
};

// height and weight
function getPkmnHeight(decimeters) {
    return {
        imperial: decimetersToImperialHeight(decimeters),
        metric: decimetersToMeter(decimeters)
    }
}

function getPkmnWeight(hectograms) {
    return {
        imperial: hectogramToLb(hectograms),
        metric: hectogramToKg(hectograms)
    }
}

// gender ratio
function getPkmnGenderRatio(rate) {
    const femaleChance = ((rate / 8) * 100).toFixed(2);
    return {
        female: femaleChance,
        male: 100 - femaleChance
    }
}

// property by language
function getPropertyForLanguage(node, property, language) {
    return node.names.filter(n => n.language.name === language)[0][property];
}

export {
    getPkmnImgId,
    getPkmnHeight,
    getPkmnWeight,
    getPkmnGenderRatio,
    getPropertyForLanguage
}
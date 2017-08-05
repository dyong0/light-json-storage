const hotpink = "ff69b4";

export const getProgressColor = (progress) => {

    switch(progress) {
        case "idea": return "lightgray";
        case "alpha": return "yellow";
        case "beta": return "blue";
        case "stable": return hotpink;
        default: return "lightgray";
    }
};

export const getVersionColor = (version) => {
    if(version >= 1.0) {
        return hotpink;
    }

    if(version >= 0.5) {
        return "yellow";
    }

    return "lightgray";
};
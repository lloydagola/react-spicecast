import styled from '@emotion/styled';

export const StyledAudioPlayer = styled.section(({ theme }) => ({
    backgroundColor: "#333",
    border: "1px solid #333",
    display: "flex",
    position: "fixed",
    bottom: "0",
    zIndex: "10000000",
    cursor: "pointer",
    alignItems: "center",
    flexDirection: "row",
    color: "#fff",
    padding: "0 5%",
    caretColor: "transparent",
    width: '100%',

    'img': {
        height: "60px",
        width: "60px",
        borderRadius: "48%",
        backgroundSize: "cover",
        margin: "4px",
    },

    'progress': {
        width: "50%",
        margin: "0 16px",
        border: "none",
        WebkitAppearance: 'none',
        appearance: "none",
        backgroundColor: "white",
        color: "blue",
        height: "2px",
    },

    'p': {
        fontSize: '1.2rem'
    },
}));
export const StyledPlayerControls = styled.div(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: " repeat(4, 1fr)",
    alignItems: "center",
    width: "250px",
}));
export const StyledTrackTitle = styled.div(() => ({
    width: "400px",
    margin: "0 20px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "block",

    'h4': {
        textOverflow: "ellipsis",
        overflow: "hidden",
        margin: "0",
    }
}));

import { useCallback } from 'react';
import { UploadProvider, useAuth } from "react-admin-base";

export default function UploadConfig({ children }) {
    const [ api, isLoggedIn ] = useAuth();
    const axios = (isLoggedIn ? api.tokenized : api.free);

    const uploader = useCallback(async function(name, blob, contentType, signal, progress) {
        try {
            const data = await axios.put('/file/' + encodeURIComponent(name), blob, {
                headers: { 'Content-Type': contentType },
                onUploadProgress: function(progressEvent) {
                    progress(progressEvent.loaded / progressEvent.total);
                    },
                signal
            });

            let file = data.data;

            file.access_url = ((process.env && process.env.REACT_APP_ENDPOINT) || '').replace(/\/$/,'') + data.data.access_url;

            return file;
        } catch (e) {
            //  if (!Axios.isCancel(e)) {
            //     console.error('Hata olustu, tekrar deneniyor..', e);
            //} else {
            console.log("Es wird abgesagt");
            // }

            throw e;
        }
    }, [ axios ]);

    return <UploadProvider uploader={uploader}>
        { children }
    </UploadProvider>
}


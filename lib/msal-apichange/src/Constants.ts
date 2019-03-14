/*
  * Copyright (c) Microsoft Corporation
  *  All Rights Reserved
  *  MIT License
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy of this
  * software and associated documentation files (the "Software"), to deal in the Software
  * without restriction, including without limitation the rights to use, copy, modify,
  * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  * permit persons to whom the Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
  * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

/**
 * @hidden
 */
export class Constants {

  // for callbacks
  static get errorDescription(): string { return "error_description"; }
  static get error(): string { return "error"; }
  static get idToken(): string { return "id_token"; }
  static get accessToken(): string { return "access_token"; }

  // to cache/retrieve tokens
  static get acquireTokenUser(): string { return "msal.acquireTokenUser"; }
  static get resourceDelimeter(): string { return "|"; }
  static get no_user(): string { return "NO_USER"; }
  static get authority(): string { return "msal.authority"; }


  static get scope(): string { return "scope"; }

  static get clientInfo(): string { return "client_info"; }
  static get clientId(): string { return "clientId"; }


  static get expiresIn(): string { return "expires_in"; }
  static get sessionState(): string { return "session_state"; }
  static get msalClientInfo(): string { return "msal.client.info"; }
  static get msalError(): string { return "msal.error"; }
  static get msalErrorDescription(): string { return "msal.error.description"; }
  static get msalSessionState(): string { return "msal.session.state"; }
  static get tokenKeys(): string { return "msal.token.keys"; }
  static get accessTokenKey(): string { return "msal.access.token.key"; }
  static get expirationKey(): string { return "msal.expiration.key"; }
  static get stateLogin(): string { return "msal.state.login"; }
  static get stateAcquireToken(): string { return "msal.state.acquireToken"; }
  static get stateRenew(): string { return "msal.state.renew"; }
  static get nonceIdToken(): string { return "msal.nonce.idtoken"; }
  static get userName(): string { return "msal.username"; }
  static get idTokenKey(): string { return "msal.idtoken"; }
  static get loginRequest(): string { return "msal.login.request"; }
  static get loginError(): string { return "msal.login.error"; }
  static get renewStatus(): string { return "msal.token.renew.status"; }
  static get msal(): string { return "msal"; }

  static get login_hint(): string { return "login_hint"; }
  static get domain_hint(): string { return "domain_hint"; }
  static get organizations(): string { return "organizations"; }
  static get consumers(): string { return "consumers"; }
  static get consumersUtid(): string { return "9188040d-6c67-4c5b-b112-36a304b66dad"; }
  static get sid(): string { return "sid"; }
  static get upn(): string { return "upn"; }
  static get adalIdToken(): string { return "adal.idtoken"; }
  static get prompt_select_account(): string { return "&prompt=select_account"; }
  static get prompt_none(): string { return "&prompt=none"; }
  static get prompt(): string { return "prompt"; }
  static get response_mode_fragment(): string { return "&response_mode=fragment"; }

  static get tokenRenewStatusCancelled(): string { return "Canceled"; }
  static get tokenRenewStatusCompleted(): string { return "Completed"; }
  static get tokenRenewStatusInProgress(): string { return "In Progress"; }
  private static _popUpWidth: number = 483;
  static get popUpWidth(): number { return this._popUpWidth; }
  static set popUpWidth(width: number) {
    this._popUpWidth = width;
  }
  private static _popUpHeight: number = 600;
  static get popUpHeight(): number { return this._popUpHeight; }
  static set popUpHeight(height: number) {
    this._popUpHeight = height;
  }
  static get login(): string { return "LOGIN"; }
  static get renewToken(): string { return "RENEW_TOKEN"; }
  static get unknown(): string { return "UNKNOWN"; }
  static get urlHash(): string { return "msal.urlHash"; }
  static get angularLoginRequest(): string { return "msal.angular.login.request"; }
  static get userIdentifier(): string { return "userIdentifier"; }
  static get common(): string { return "common"; }
  static get cacheLocationLocal(): string { return "localStorage"; }
  static get cacheLocationSession(): string { return "sessionStorage"; }
}
